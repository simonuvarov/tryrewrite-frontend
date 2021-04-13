export const getAccessTokenFromStorage = (): string | undefined => {
  const item = localStorage.getItem('accessToken');
  if (!item) return undefined;

  return JSON.parse(item);
};
