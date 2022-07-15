const getToken = () => {
	return uni.getStorageSync('token');
};

const setToken = (token: string) => {
	return uni.setStorageSync('token', token);
};
