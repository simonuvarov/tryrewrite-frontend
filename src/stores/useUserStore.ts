import create, { State } from 'zustand';
import { removeAccessTokenFromStorage } from '../lib/removeAccessTokenFromStorage';
import { setAccessTokenToStorage } from '../lib/setAccessTokenToStorage';
import {
  Credentials,
  isValidSession,
  signin,
  signup
} from '../services/auth.service';

interface UserStoreProps extends State {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  setAuthenticated: (value: boolean) => void;
  setAuthenticating: (value: boolean) => void;
  signup: (credentials: Credentials) => Promise<void>;

  signin: (credentials: Credentials) => Promise<void>;
  signout: () => Promise<void>;
  keepalive: () => Promise<void>;
}

export const useUserStore = create<UserStoreProps>(set => ({
  isAuthenticated: false,
  isAuthenticating: true,
  setAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
  setAuthenticating: (value: boolean) => set({ isAuthenticating: value }),
  signup: async (credentials: Credentials) => {
    set({ isAuthenticating: true });
    signup(credentials)
      .then(res => {
        setAccessTokenToStorage(res.accessToken);
        set({ isAuthenticated: true });
      })
      .catch(() => set({ isAuthenticated: false }))
      .finally(() => set({ isAuthenticating: false }));
  },
  signin: async (credentials: Credentials) => {
    set({ isAuthenticating: true });
    signin(credentials)
      .then(res => {
        setAccessTokenToStorage(res.accessToken);
        set({ isAuthenticated: true });
      })
      .catch(() => set({ isAuthenticated: false }))
      .finally(() => set({ isAuthenticating: false }));
  },
  signout: async () => {
    removeAccessTokenFromStorage();
    set({ isAuthenticated: false });
  },
  keepalive: async () => {
    isValidSession()
      .then(() => set({ isAuthenticated: true }))
      .catch(() => set({ isAuthenticated: false }))
      .finally(() => set({ isAuthenticating: false }));
  }
}));
