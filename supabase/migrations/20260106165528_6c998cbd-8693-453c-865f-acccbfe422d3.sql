-- 1) Owner flag on profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS is_owner boolean NOT NULL DEFAULT false;

-- If there is no owner yet, make the oldest profile the owner
UPDATE public.profiles
SET is_owner = true
WHERE id = (
  SELECT id FROM public.profiles
  ORDER BY created_at ASC
  LIMIT 1
)
AND NOT EXISTS (
  SELECT 1 FROM public.profiles WHERE is_owner = true
);

-- Auto-assign first created profile as owner (future-proof)
CREATE OR REPLACE FUNCTION public.set_first_owner()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE is_owner = true) THEN
    NEW.is_owner := true;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_set_first_owner ON public.profiles;
CREATE TRIGGER profiles_set_first_owner
BEFORE INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.set_first_owner();

-- 2) Private storage bucket for employee materials
INSERT INTO storage.buckets (id, name, public)
VALUES ('employee-materials', 'employee-materials', false)
ON CONFLICT (id) DO NOTHING;

-- 3) Storage RLS policies
-- View/list/download: any logged-in user
DROP POLICY IF EXISTS "Employee materials are viewable by authenticated users" ON storage.objects;
CREATE POLICY "Employee materials are viewable by authenticated users"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'employee-materials'
  AND auth.uid() IS NOT NULL
);

-- Upload/update/delete: only the owner
DROP POLICY IF EXISTS "Owner can upload employee materials" ON storage.objects;
CREATE POLICY "Owner can upload employee materials"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'employee-materials'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.user_id = auth.uid() AND p.is_owner = true
  )
);

DROP POLICY IF EXISTS "Owner can update employee materials" ON storage.objects;
CREATE POLICY "Owner can update employee materials"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'employee-materials'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.user_id = auth.uid() AND p.is_owner = true
  )
)
WITH CHECK (
  bucket_id = 'employee-materials'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.user_id = auth.uid() AND p.is_owner = true
  )
);

DROP POLICY IF EXISTS "Owner can delete employee materials" ON storage.objects;
CREATE POLICY "Owner can delete employee materials"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'employee-materials'
  AND EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.user_id = auth.uid() AND p.is_owner = true
  )
);
