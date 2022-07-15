<template></template>
<script lang="ts" setup>
import { useQuery } from 'villus';

const graphqlQuery = {
	query: `
        mutation CreateNewUser($email:String!, $password:String!,$name:String!) {
          createUser(userInput: {email: $email, name:$name, password:$password}) {
            _id
            email
          }
        }
      `,
	variables: {
		email: '1727206307@qq.com',
		name: 'minnie',
		password: '123456',
	},
};

const { data, isFetching, error } = useQuery(graphqlQuery);
console.log(data, isFetching, error);
</script>
