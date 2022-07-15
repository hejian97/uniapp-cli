const TOKEN_NAME = 'token';

export const getToken = () => {
  return uni.getStorageSync(TOKEN_NAME);
};

export const setToken = (token: string) => {
  return uni.setStorageSync(TOKEN_NAME, token);
};

export const removeToken = () => {
  return uni.removeStorageSync(TOKEN_NAME);
};

var add = (a, b) => {
  console.log(a + b);
};
