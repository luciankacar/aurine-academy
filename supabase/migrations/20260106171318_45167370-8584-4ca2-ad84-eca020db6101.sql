-- Function to create profile when user registers
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

-- Trigger on auth.users
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

-- Sync existing users who don't have profiles yet
INSERT INTO public.profiles (user_id, email, display_name)
SELECT id, email, COALESCE(raw_user_meta_data->>'display_name', split_part(email, '@', 1))
FROM auth.users
WHERE id NOT IN (SELECT user_id FROM public.profiles);