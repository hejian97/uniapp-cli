import { createSSRApp } from 'vue';
import { apolloClient } from './plugins/gql';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni';
import App from './App.vue';

const pinia = createPinia();
pinia.use(createPinia);

export function createApp() {
	const app = createSSRApp(App);

	app.use(apolloClient);
	return {
		app,
	};
}
