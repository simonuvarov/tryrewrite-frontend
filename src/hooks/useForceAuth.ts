import { useRouter } from 'next/dist/client/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

interface UseSessionProps {
  redirectTo: string;
}

export const useForceAuth = (props: UseSessionProps) => {
  const { authenticated, authenticating } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authenticating && !authenticated) router.push(props.redirectTo);
  }, [authenticating, authenticated]);

  // a little hack to ensure that we are not returning "authenticating"
  // when it's finished and we are redirecting
  return { loading: authenticating || !authenticated };
};
