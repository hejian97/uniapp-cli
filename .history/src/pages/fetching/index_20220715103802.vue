<template>
	{{ data && data.login.token }}
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useQuery } from 'villus';
import { setToken } from '@/utils/token';

const user = ref({ name: 'minnie', age: 20 });

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

const graphqlUserQuery = {
	query: `
        {
        user{
            status
            }
        }
    `,
};
console.log(user.value);

const { execute } = useQuery(graphqlQuery);
// console.log(result);
execute().then((res) => console.log(res));
// setToken();
// const result = useQuery(graphqlUserQuery);
// console.log(result);
// console.log(data);
// console.log(isFetching);
// console.log(error);
</script>
