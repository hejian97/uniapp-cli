import { defineStore } from 'pinia';
import { useQuery } from 'villus';

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
		login(email: string, password: string) {
			const { data } = useQuery();
		},
	},
});
