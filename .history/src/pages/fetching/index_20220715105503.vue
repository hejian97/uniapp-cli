<template>
	{{ data && data.login.token }}
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useQuery } from 'villus';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
const store = useUserStore();

const graphqlQuery = {
	query: `
        {
        user{
            status
            }
        }
    `,
};
store.login('1727206307@qq.com', '123456');

const { execute, data } = useQuery(graphqlQuery);
// console.log(result);
execute().then((res) => console.log(res));
// setToken();
// const result = useQuery(graphqlUserQuery);
// console.log(result);
// console.log(data);
// console.log(isFetching);
// console.log(error);
</script>
