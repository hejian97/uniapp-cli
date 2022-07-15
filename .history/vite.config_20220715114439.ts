import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import uni from '@dcloudio/vite-plugin-uni';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			reactivityTransform: true,
		}),
		uni(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
