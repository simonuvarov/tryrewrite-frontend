export const setAccessTokenToStorage = (accessToken: string) => {
  const item = JSON.stringify(accessToken);
  localStorage.setItem('accessToken', item);
};
