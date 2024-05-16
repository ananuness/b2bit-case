import { User } from '@/entities/User';
import { httpClient } from '../httpClient';

export interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse extends User {}

export async function login(params: LoginParams) {
  const { data } = await httpClient.post<LoginResponse>('/auth/login/', params);

  return data;
}
