<template>
	{{ user }}
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { ref, watchEffect, watch } from 'vue';

const users = ref([]);
const store = useUserStore();

store.login('1727206307@qq.com', '123456');
store.getUserInfo();

let { user } = storeToRefs(store);
console.log('user', user);
watch(user, (incoming) => {
	users.value.push(incoming);
});
</script>
