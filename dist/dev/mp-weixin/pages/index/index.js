"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user = require("../../store/user.js");
require("../../utils/token.js");
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  _easycom_uni_badge2();
}
const _easycom_uni_badge = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-badge/uni-badge.js";
if (!Math) {
  _easycom_uni_badge();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const store = store_user.useUserStore();
    const { firstName, lastName } = common_vendor.storeToRefs(store);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "1"
        }),
        b: common_vendor.t(common_vendor.unref(firstName) + common_vendor.unref(lastName))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/hejian/Desktop/program/auction_project/auction_front_web/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
