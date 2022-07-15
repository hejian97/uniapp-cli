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
		async login(email: string, password: string) {
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
			const { data, execute } = useQuery(graphqlQuery);
			console.log(toRaw(data.value));
			await execute();
			// this.accesstoken = toRaw(data);
		},
	},
});
