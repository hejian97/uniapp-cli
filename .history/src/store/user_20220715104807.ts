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
					email: '1727206307@qq.com',
					password: '123456',
				},
			};
			const { data } = useQuery();
		},
	},
});
