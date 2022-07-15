const getToken = () => {
	uni;
	return uni.getStorageSync('token');
};

const setToken = (token: string) => {
	return uni.setStorageSync('token', token);
};

const removeToken = () => {
	return uni.removeStorageSync('token');
};
