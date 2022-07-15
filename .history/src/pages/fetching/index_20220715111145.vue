<template></template>
<script lang="ts" setup>
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
const { accesstoken } = storeToRefs(store);
console.log(accesstoken);
const { execute, data } = useQuery(graphqlQuery);
// console.log(result);
execute().then((res) => console.log(res));
</script>
