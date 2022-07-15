import { defineStore } from 'pinia';
import { useQuery } from 'villus';
import { setToken } from '@/utils/token';
export const useUserStore = defineStore('storeUser', {
	state: () => {
		return {
			firstName: 'John',
			lastName: 'Smith',
			accesstoken: 'xxxxxxx',
			user: {},
		};
	},
	actions: {
		setToken(value: string) {
			this.accesstoken = value;
			setToken(value);
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
			const { execute } = useQuery(graphqlQuery);
			const {
				data: {
					login: { token },
				},
			} = await execute();
			this.setToken(token);
		},
		async getUserInfo() {
			const graphqlQuery = {
				query: `
                {
                    user{
                        status
                    }
                }
                `,
			};
			const { data: results, execute } = useQuery(graphqlQuery);
			console.log(results);
			const { data, error } = await execute();
			if (!error) {
				this.user = results;
			}
		},
	},
});
