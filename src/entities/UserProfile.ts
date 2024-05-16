import { Avatar } from './User';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  last_name: string;
  last_login: string;
  avatar: Avatar;
  role: {
    value: number;
    label: string;
  };
  staff_role: {
    value: number;
    label: string;
  };
}
