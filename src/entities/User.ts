export type Avatar = {
  id: number;
  image_low_url: string;
  image_medium_url: string;
  image_high_url: string;
};

export interface User {
  user: {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    avatar: Avatar | null;
    type: string;
    created: string;
    modified: string;
    role: string;
  };
  tokens: {
    refresh: string;
    access: string;
  };
}
