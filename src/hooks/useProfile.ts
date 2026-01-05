import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface ProfileData {
  salonName: string;
  email: string;
  phone: string;
  address: string;
  displayName: string;
  avatarUrl: string | null;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (fetchError) {
        console.error('Error fetching profile:', fetchError);
        setError(fetchError.message);
        return;
      }

      if (data) {
        setProfile({
          salonName: data.salon_name || '',
          email: data.email || user.email || '',
          phone: data.phone || '',
          address: data.address || '',
          displayName: data.display_name || '',
          avatarUrl: data.avatar_url,
        });
      } else {
        // Profile doesn't exist, use defaults from auth
        setProfile({
          salonName: '',
          email: user.email || '',
          phone: '',
          address: '',
          displayName: user.user_metadata?.display_name || '',
          avatarUrl: null,
        });
      }
    } catch (err) {
      console.error('Error in fetchProfile:', err);
      setError('Nie udało się pobrać profilu');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (data: Partial<ProfileData>) => {
    if (!user) return { error: 'Nie jesteś zalogowany' };

    try {
      const updateData = {
        salon_name: data.salonName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        display_name: data.displayName,
        avatar_url: data.avatarUrl,
        updated_at: new Date().toISOString(),
      };

      // Remove undefined values
      Object.keys(updateData).forEach(key => {
        if (updateData[key as keyof typeof updateData] === undefined) {
          delete updateData[key as keyof typeof updateData];
        }
      });

      const { error: updateError } = await supabase
        .from('profiles')
        .update(updateData)
        .eq('user_id', user.id);

      if (updateError) {
        console.error('Error updating profile:', updateError);
        return { error: updateError.message };
      }

      // Refresh profile data
      await fetchProfile();
      return { error: null };
    } catch (err) {
      console.error('Error in updateProfile:', err);
      return { error: 'Nie udało się zaktualizować profilu' };
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return {
    profile,
    loading,
    error,
    updateProfile,
    refetchProfile: fetchProfile,
  };
};
