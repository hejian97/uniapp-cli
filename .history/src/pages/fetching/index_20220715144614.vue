<template>
	<view>
		<text @click="handleClick(user)">{{ user && user.user }}</text>
	</view>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { ref, watchEffect, watch } from 'vue';

const users = ref([]);
const store = useUserStore();

store.login('1727206307@qq.com', '123456');
store.getUserInfo();

const { user } = storeToRefs(store);

const handleClick = (user) => {
	console.log(user);
};
// watch(user, (incoming) => users.value.push(incoming));
</script>
