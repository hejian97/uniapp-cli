"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user = require("../../store/user.js");
require("../../utils/token.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref([]);
    const store = store_user.useUserStore();
    store.login("1727206307@qq.com", "123456");
    store.getUserInfo();
    const { user } = common_vendor.storeToRefs(store);
    const handleClick = (user2) => {
      console.log(user2.user);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(user) && common_vendor.unref(user).user),
        b: common_vendor.o(($event) => handleClick(common_vendor.unref(user)))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/hejian/Desktop/program/auction_project/auction_front_web/src/pages/fetching/index.vue"]]);
wx.createPage(MiniProgramPage);
