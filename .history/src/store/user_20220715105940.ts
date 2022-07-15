import { defineStore } from 'pinia';
import { useQuery } from 'villus';
import { toRaw } from 'vue';
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
			const graphqlQuery = {
				query: `
                    query UserLogin($email:String!,$password:String!) {
                        login(email: $email, password: $password) {
                            token
                            userId
                        }
                        }
                    `,
				variables: {
					email,
					password,
				},
			};
			const { data } = useQuery(graphqlQuery);
			this.accesstoken = data.value?.login;
		},
	},
});
