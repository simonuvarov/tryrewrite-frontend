export const setAccessTokenToStorage = (accessToken: string) => {
  return localStorage.setItem('accessToken', accessToken);
};
