import { createSSRApp } from 'vue';
import { apolloClient } from './plugins/gql';
import App from './App.vue';

export function createApp() {
	const app = createSSRApp(App);
	app.use(apolloClient);
	return {
		app,
	};
}
