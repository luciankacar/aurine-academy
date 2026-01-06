-- Create roles enum (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role' AND typnamespace = 'public'::regnamespace) THEN
    CREATE TYPE public.app_role AS ENUM ('owner');
  END IF;
END $$;

-- User roles table (NO FK to auth.users by design)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Role check helpers (SECURITY DEFINER to avoid RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

CREATE OR REPLACE FUNCTION public.is_owner()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(auth.uid(), 'owner');
$$;

-- RLS: users can only view their own roles; no self-assignment policies
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Migrate existing owners from profiles.is_owner into roles
INSERT INTO public.user_roles (user_id, role)
SELECT p.user_id, 'owner'
FROM public.profiles p
WHERE p.is_owner = true
ON CONFLICT DO NOTHING;

-- Storage access: ONLY owner can list/download/upload/delete in employee-materials bucket
DROP POLICY IF EXISTS "Owner can manage employee materials" ON storage.objects;
CREATE POLICY "Owner can manage employee materials"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'employee-materials' AND public.is_owner())
WITH CHECK (bucket_id = 'employee-materials' AND public.is_owner());
