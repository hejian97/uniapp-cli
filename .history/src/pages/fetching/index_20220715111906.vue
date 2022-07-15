<template>
	{{ user }}
</template>
<script lang="ts" setup>
import { useQuery } from 'villus';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
const store = useUserStore();

store.login('1727206307@qq.com', '123456');
store.getUserInfo();

const { user } = storeToRefs(store);
</script>
