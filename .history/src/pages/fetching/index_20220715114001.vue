<template>
	{{ user }}
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { toRaw } from 'vue';
const store = useUserStore();

store.login('1727206307@qq.com', '123456');
store.getUserInfo();

let { user } = storeToRefs(store);
user.value = {};
</script>
