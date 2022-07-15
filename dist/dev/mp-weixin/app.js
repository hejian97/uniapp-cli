"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
var plugins_gql = require("./plugins/gql.js");
require("./utils/token.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/fetching/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/hejian/Desktop/program/auction_project/auction_front_web/src/App.vue"]]);
const pinia = common_vendor.createPinia();
pinia.use(common_vendor.index$1);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(plugins_gql.apolloClient);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
