import { UserProfile } from '@/entities/UserProfile';
import { httpClient } from '../httpClient';

export interface ProfileResponse extends UserProfile {}

export async function profile() {
  const { data } = await httpClient.get<ProfileResponse>('/auth/profile/');

  return data;
}
