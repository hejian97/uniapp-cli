import { createSSRApp } from 'vue';
import App from './App.vue';
import uView from './uni_modules/vk-uni_';
export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
