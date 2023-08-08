"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/index.js";
  "./pages/search/index.js";
  "./pages/user/index.js";
}
const _sfc_main = {
  data() {
    return {
      tabList: []
    };
  },
  onLaunch: function() {
    let tokenInfo = common_vendor.index.getStorageSync("tokenInfo");
    let hasValidToken = false;
    if (tokenInfo) {
      let time = (/* @__PURE__ */ new Date()).valueOf();
      hasValidToken = time - tokenInfo.timestamp < 3600 * 24 * 1e3;
    }
    if (!hasValidToken) {
      common_vendor.index.login({
        provider: "weixin",
        success: (wxInfo) => {
          common_vendor.index.setStorage({
            key: "tokenInfo",
            data: {
              token: "dasdajdahs",
              timestamp: (/* @__PURE__ */ new Date()).valueOf()
            }
          });
        }
      });
    }
  },
  onShow: function() {
  },
  onHide: function() {
    console.log("App Hide");
  },
  onLoad() {
    common_vendor.index.hideTabBar();
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/uuuuuuazu/Desktop/entry/hbuildxProject/uniWx/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
