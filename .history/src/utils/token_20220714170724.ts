export const getToken = () => {
	uni;
	return uni.getStorageSync('token');
};

export const setToken = (token: string) => {
	return uni.setStorageSync('token', token);
};

export const removeToken = () => {
	return uni.removeStorageSync('token');
};
