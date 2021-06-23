import create, { State } from 'zustand';
import { removeAccessTokenFromStorage } from '../lib/removeAccessTokenFromStorage';
import { Credentials, signin, signup } from '../services/auth.service';
import { me } from '../services/users.service';

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
    return new Promise((resolve, reject) => {
      signup(credentials)
        .then(res => {
          set({ isAuthenticated: false });
          resolve();
        })
        .catch(e => {
          set({ isAuthenticated: false });
          reject(e);
        })
        .finally(() => set({ isAuthenticating: false }));
    });
  },
  signin: async (credentials: Credentials) => {
    set({ isAuthenticating: true });

    return new Promise((resolve, reject) => {
      signin(credentials)
        .then(res => {
          set({ isAuthenticated: true });
          resolve();
        })
        .catch(e => {
          set({ isAuthenticated: false });
          reject(e);
        })
        .finally(() => set({ isAuthenticating: false }));
    });
  },
  signout: async () => {
    removeAccessTokenFromStorage();
    set({ isAuthenticated: false });
  },
  keepalive: async () => {
    me()
      .then(() => set({ isAuthenticated: true }))
      .catch(() => {
        set({ isAuthenticated: false });
        removeAccessTokenFromStorage();
      })
      .finally(() => set({ isAuthenticating: false }));
  }
}));
