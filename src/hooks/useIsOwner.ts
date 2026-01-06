import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export const useIsOwner = () => {
  const { user } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      if (!user) {
        setIsOwner(false);
        setLoading(false);
        return;
      }
      // Check user_roles table for owner role
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'owner')
        .maybeSingle();
      setIsOwner(!!data);
      setLoading(false);
    };
    check();
  }, [user]);

  return { isOwner, loading };
};
