export const getAccessTokenFromStorage = (): string | undefined => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? accessToken : undefined;
};
