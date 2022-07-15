<template>
	{{ data && data.login.token }}
</template>
<script lang="ts" setup>
import { ref, toRaw } from 'vue';
import { useQuery } from 'villus';
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

const { data, isFetching, error } = useQuery(graphqlQuery);
const result = toRaw(data);
console.log(data);
console.log(isFetching);
console.log(error);
</script>
