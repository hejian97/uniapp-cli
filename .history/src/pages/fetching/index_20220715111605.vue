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

const { data } = useQuery(graphqlQuery);
console.log(data);
</script>
