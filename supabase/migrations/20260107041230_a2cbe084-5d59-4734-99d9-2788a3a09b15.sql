-- Allow all authenticated users to view/download employee materials (courses)
DROP POLICY IF EXISTS "Authenticated can read employee materials" ON storage.objects;
CREATE POLICY "Authenticated can read employee materials"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'employee-materials');

-- Keep management restricted to owner
DROP POLICY IF EXISTS "Owner can manage employee materials" ON storage.objects;
CREATE POLICY "Owner can manage employee materials"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'employee-materials' AND public.is_owner())
WITH CHECK (bucket_id = 'employee-materials' AND public.is_owner());
