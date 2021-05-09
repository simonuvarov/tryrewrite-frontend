import { useEffect } from 'react';
import { useUserStore } from '../stores/useUserStore';

const delay = 60 * 1000;

export const useKeepAlive = () => {
  const { keepalive } = useUserStore();

  useEffect(() => {
    keepalive();
    let timer = setInterval(() => {
      keepalive();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, []);
};
