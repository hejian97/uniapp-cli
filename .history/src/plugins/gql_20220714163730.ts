import { createClient, fetch } from 'villus';

type Methods = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

// 此处重写fetch，请求采用Uniapp提供的uni.request

const fetchPlugin = fetch({
	fetch(url, options) {
		let token = '';
		return new Promise((resolve, reject) => {
			uni.request({
				url: url.toString(),
				method: options?.method as Methods,
				data: options?.body as any,
				header: {
					...options?.headers,
					...(token ? { Authorization: `Bearer ${token}` } : {}),
				},
				success(res) {
					return resolve({
						ok: true,
						status: res.statusCode,
						headers: res.header,
						text: async () => JSON.stringify(res.data),
						json: async () => res.data,
					} as Response);
				},
				fail(e) {
					return reject(e);
				},
			});
		});
	},
});

export const apolloClient = createClient({
	url: 'http://localhost:3000/graphql',
	use: [fetchPlugin],
});
