"use strict";
var common_vendor = require("../common/vendor.js");
var utils_token = require("../utils/token.js");
const fetchPlugin = common_vendor.fetch({
  fetch(url, options) {
    let token = utils_token.getToken();
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: url.toString(),
        method: options == null ? void 0 : options.method,
        data: options == null ? void 0 : options.body,
        header: {
          ...options == null ? void 0 : options.headers,
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        success(res) {
          const { statusCode, header, data } = res;
          switch (statusCode) {
            case 401:
              break;
            case 404:
              break;
            default:
              return resolve({
                ok: true,
                status: statusCode,
                headers: header,
                text: async () => JSON.stringify(data),
                json: async () => data
              });
          }
        },
        fail(e) {
          return reject(e);
        }
      });
    });
  }
});
const apolloClient = common_vendor.createClient({
  url: "http://localhost:8080/graphql",
  use: [fetchPlugin, common_vendor.multipart()]
});
exports.apolloClient = apolloClient;
