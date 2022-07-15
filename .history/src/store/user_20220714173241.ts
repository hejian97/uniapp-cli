import { setToken } from './../utils/token';
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
	actions: {
		setToken(value: string) {
			this.accesstoken = value;
		},
	},
});
