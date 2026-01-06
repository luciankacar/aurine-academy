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
      const { data } = await supabase
        .from('profiles')
        .select('is_owner')
        .eq('user_id', user.id)
        .maybeSingle();
      setIsOwner(data?.is_owner ?? false);
      setLoading(false);
    };
    check();
  }, [user]);

  return { isOwner, loading };
};
