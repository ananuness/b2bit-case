/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/auth';
import { ProfileResponse } from '@/services/auth/profile';
import { useEffect, useState } from 'react';

export function useProfileDetails() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<ProfileResponse | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await authService.profile();

        setUserProfile(response);
      } catch (error: any) {
        if (error.response) {
          navigate('/signin', { replace: true });
        }
      }
    })();
  }, [navigate]);

  return {
    userProfile,
  };
}
