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
		email: 'test2@email.com',
		name: 'minnie',
		password: '123456',
	},
};

const { data, isFetching, error } = useQuery(graphqlQuery);
console.log(data);
console.log(isFetching);
console.log(error);
</script>
