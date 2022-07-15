import { defineStore } from 'pinia';

export const useUserStore = defineStore('storeUser', {
	state: () => {
		return {
			firstName: 'John',
			lastName: 'Smith',
			accesstoken: 'xxxxxxx',
		};
	},
	getters: {},
	actions: {},
	persist: {
		enable: true,
	},
});
