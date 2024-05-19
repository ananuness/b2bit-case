import { createContext, useState } from 'react';
import { ACCESS_TOKEN_KEY } from '@/constants';

interface AuthContextValue {
  signedIn: boolean;
  signIn(accessToken: string): void;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    return !!storedAccessToken;
  });

  const signIn = (accessToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    setSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
