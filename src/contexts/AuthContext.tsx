import { createContext, FC, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import {
  Credentials,
  isValidSession,
  signin,
  signup,
  Tokens
} from '../services/auth.service';

interface AuthContextProps {
  signin: (credentials: Credentials) => Promise<Tokens>;
  signup: (credentials: Credentials) => Promise<Tokens>;
  authenticated: boolean;
  authenticating: boolean;
}

const initialValue: AuthContextProps = {
  signin,
  signup,
  authenticated: false,
  authenticating: true
};

export const AuthContext = createContext<AuthContextProps>(initialValue);

export const AuthProvider: FC = props => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(!authenticated);
  const [accessToken, setAccessToken] = useLocalStorage<string | undefined>(
    'accessToken'
  );

  useEffect(() => {
    isValidSession()
      .then(validity => {
        setAuthenticated(validity);
      })
      .finally(() => setAuthenticating(false));
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        signin,
        signup,
        authenticated,
        authenticating
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
