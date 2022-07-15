import { createClient, fetch } from 'villus';
import { getToken } from '@/utils/token';
type Methods = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

// 此处重写fetch，请求采用Uniapp提供的uni.request

const fetchPlugin = fetch({
	fetch(url, options) {
		let token = getToken();
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
					const { statusCode, header, data } = res;
					switch (statusCode) {
						case 401:
							break;
						case 404 || 500:
							break;
						default:
							return resolve({
								ok: true,
								status: statusCode,
								headers: header,
								text: async () => JSON.stringify(data),
								json: async () => data,
							} as Response);
					}
				},
				fail(e) {
					return reject(e);
				},
			});
		});
	},
});

export const apolloClient = createClient({
	url: 'http://localhost:8080/graphql',
	use: [fetchPlugin],
});
