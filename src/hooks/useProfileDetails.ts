/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/auth';
import { ProfileResponse } from '@/services/auth/profile';
import { useAuth } from './useAuth';

export function useProfileDetails() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await authService.profile();

        setUserProfile(response);
      } catch (error: any) {
        if (error.response.status === 401) {
          signOut();
          navigate('/signin', { replace: true, state: 'Session expired' });
        }

        if (error.response.status >= 500) {
          signOut();
          navigate('/signin', {
            replace: true,
            state: 'Oops, server issues, please try again later.',
          });
        }
      }
    })();

    setLoading(false);
  }, [navigate, signOut]);

  return {
    userProfile,
    loading,
  };
}
