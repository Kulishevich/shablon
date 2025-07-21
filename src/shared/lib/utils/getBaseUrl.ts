export const getApiBaseUrl = (variant?: string) => {
  const baseApiUrl = variant
    ? `https://${variant}.lookda.com/api`
    : process.env.NEXT_PUBLIC_API_URL;

  return baseApiUrl;
};

export const getStoreBaseUrl = (variant?: string) => {
  const baseApiUrl = variant
    ? `https://${variant}.lookda.com/storage`
    : process.env.NEXT_PUBLIC_STORE_URL;

  return baseApiUrl;
};
