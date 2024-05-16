import { createContext, useState } from 'react';

interface AuthContextValue {
  signedIn: boolean;
  signIn(accessToken: string): void;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem('@b2bit:access_token');

    return !!storedAccessToken;
  });

  const signIn = (accessToken: string) => {
    localStorage.setItem('@b2bit:access_token', accessToken);
    setSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem('@b2bit:access_token');
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
