<template>
	{{ data && data.login.token }}
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useQuery } from 'villus';
const username = ref('minnie');

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
console.log(username.name);

const { data, isFetching, error } = useQuery(graphqlQuery);

console.log(data);
console.log(isFetching);
console.log(error);
</script>
