import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import authService, { Credentials } from '../services/auth.service';
import usersService, { UserInformation } from '../services/users.service';

interface AuthContextProps {
  user?: UserInformation;
  signin: (credentials: Credentials) => void;
  signup: (credentials: Credentials) => void;
  signout: () => void;
  error?: any;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({
  children
}: {
  children: ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<UserInformation>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [initializing, setInitializing] = useState(true);

  // TODO: maybe extract redirections to forms
  const router = useRouter();

  // clear error on route change
  useEffect(() => {
    const handleRouteChange = (
      url: string,
      { shallow }: { shallow: boolean }
    ) => {
      setError(undefined);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  // Check user on the first render
  useEffect(() => {
    usersService
      .me()
      .then(user => setUser(user))
      .catch(err => {})
      .finally(() => setInitializing(false));
  }, []);

  const signin = (credentials: Credentials) => {
    setLoading(true);
    authService
      .signin(credentials)
      .then(_ => {
        usersService.me().then(res => setUser(res));
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  const signup = (credentials: Credentials) => {
    setLoading(true);
    authService
      .signup(credentials)
      .then(_ => router.push('/email-sent'))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  const signout = () => {
    authService
      .signout()
      .then(_ => setUser(undefined))
      .catch(err => setError(error));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signin,
      signup,
      signout
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initializing && children}
    </AuthContext.Provider>
  );
};
