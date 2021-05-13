import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useUserStore } from '../stores/useUserStore';

interface UseSessionProps {
  redirectTo: string;
}

export const useForceUnauth = (props: UseSessionProps) => {
  const { isAuthenticated, isAuthenticating } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticating && isAuthenticated) router.push(props.redirectTo);
  }, [isAuthenticated, isAuthenticating]);

  // keep showing loading until redirected to avoid screen changes
  return {
    isAuthenticating,
    isAuthenticated,
    isLoading: isAuthenticating || isAuthenticated
  };
};
