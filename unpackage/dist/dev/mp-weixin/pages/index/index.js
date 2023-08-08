"use strict";
const common_vendor = require("../../common/vendor.js");
const tabBar = () => "../../components/tabbar/index.js";
const _sfc_main = {
  data() {
    return {
      title: "Hello World"
    };
  },
  components: {
    tabBar
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_tabBar = common_vendor.resolveComponent("tabBar");
  _component_tabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      current: 0,
      tabList: _ctx.tabList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/uuuuuuazu/Desktop/entry/hbuildxProject/uniWx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
