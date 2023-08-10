"use strict";
const common_vendor = require("../../common/vendor.js");
const common_request = require("../../common/request.js");
const addTip = () => "../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.js";
const _sfc_main = {
  components: {
    addTip
  },
  data() {
    return {
      tip: "点击「添加小程序」，下次访问更便捷",
      duration: 1,
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      bannerList: [
        {
          imageUrl: "https://cdn.zhoukaiwen.com/zjx_banner.png"
        },
        {
          imageUrl: "https://cdn.zhoukaiwen.com/zjx_banner3.png"
        },
        {
          imageUrl: "https://cdn.zhoukaiwen.com/zjx_banner1.png"
        },
        {
          imageUrl: "https://cdn.zhoukaiwen.com/zjx_banner2.png"
        }
      ],
      categories: [{
        cuIcon: "hotfill",
        color: "red",
        badge: "优惠",
        mid: "1",
        name: "学习技术"
      }, {
        cuIcon: "colorlens",
        color: "orange",
        badge: 1,
        mid: "2",
        name: "需求定制"
      }, {
        cuIcon: "goodsnewfill",
        color: "yellow",
        badge: 12,
        mid: "3",
        name: "开源项目"
      }, {
        cuIcon: "calendar",
        color: "cyan",
        badge: 22,
        mid: "4",
        name: "文章资讯"
      }],
      curriculum: [
        {
          name: "uniapp项目开发",
          content: "uniapp小程序商城系统开发，实战项目..."
        },
        {
          name: "后台管理系统",
          content: "vue+iview的后台管理系统建设系统开发..."
        },
        {
          name: "App模板",
          content: "基于uniapp开发的效率类APP，开发至上线..."
        },
        {
          name: "PC端官网开发",
          content: "html/css/jQuery建设的PC端官方门户网站..."
        },
        {
          name: "uniapp多端打包",
          content: "uniapp开发完成上线的打包流程，上架商店等..."
        }
      ],
      projectList: []
    };
  },
  watch: {},
  mounted() {
    console.log(this.projectList);
    this.getData();
  },
  methods: {
    getData() {
      console.log("数据加载");
      let opts = {
        url: "json/project.json",
        method: "get"
      };
      common_vendor.index.showLoading({
        title: "加载中"
      });
      common_request.request.httpRequest(opts).then((res) => {
        console.log(res);
        common_vendor.index.hideLoading();
        if (res.statusCode == 200) {
          this.projectList = res.data.data;
        }
      });
    },
    scroll: function(e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    },
    goCategorieslist: function(e) {
      if (e.currentTarget.dataset.mid == 1 || e.currentTarget.dataset.mid == 2) {
        common_vendor.index.navigateTo({
          url: "../timeline?mid=" + e.currentTarget.dataset.mid
        });
      } else if (e.currentTarget.dataset.mid == 3) {
        common_vendor.index.navigateTo({
          url: "../project/list"
        });
      }
    },
    goProjectList() {
      common_vendor.index.navigateTo({
        url: "../project/list"
      });
    },
    goProject(id) {
      common_vendor.index.navigateTo({
        url: "../project/project?proId=" + id
      });
    },
    goVideo() {
      common_vendor.index.navigateTo({
        url: "../video"
      });
    }
  }
};
if (!Array) {
  const _component_cu_custom = common_vendor.resolveComponent("cu-custom");
  const _component_add_tip = common_vendor.resolveComponent("add-tip");
  (_component_cu_custom + _component_add_tip)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      bgColor: "bg-gradual-blue",
      isBack: false
    }),
    b: common_vendor.p({
      tip: $data.tip,
      duration: $data.duration
    }),
    c: common_vendor.f($data.bannerList, (item, index, i0) => {
      return {
        a: item.imageUrl,
        b: index
      };
    }),
    d: common_vendor.f($data.categories, (item, index, i0) => {
      return common_vendor.e({
        a: item.count != 0
      }, item.count != 0 ? common_vendor.e({
        b: item.badge != 1
      }, item.badge != 1 ? {
        c: common_vendor.t(item.badge > 99 ? "99+" : item.badge)
      } : {}) : {}, {
        d: common_vendor.n("cuIcon-" + item.cuIcon),
        e: common_vendor.n("text-" + item.color),
        f: common_vendor.t(item.name),
        g: index,
        h: common_vendor.s({
          animation: "show " + ((index + 1) * 0.2 + 1) + "s 1"
        }),
        i: common_vendor.o((...args) => $options.goCategorieslist && $options.goCategorieslist(...args), index),
        j: item.mid
      });
    }),
    e: common_vendor.o((...args) => $options.goVideo && $options.goVideo(...args)),
    f: common_vendor.f($data.curriculum, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n("nav-li bg-index" + (index + 1)),
        c: common_vendor.t(item.content),
        d: common_vendor.o((...args) => $options.goVideo && $options.goVideo(...args), index),
        e: common_vendor.n("bg-index" + (index + 1)),
        f: index
      };
    }),
    g: common_vendor.o((...args) => $options.goProjectList && $options.goProjectList(...args)),
    h: common_vendor.f($data.projectList, (item, index, i0) => {
      return {
        a: item.tImg,
        b: common_vendor.t(item.tabs),
        c: common_vendor.t(item.type),
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.time),
        f: common_vendor.t(item.user[0].read),
        g: common_vendor.t(item.user[0].like),
        h: common_vendor.t(item.user[0].use),
        i: common_vendor.o(($event) => $options.goProject(item.id), index),
        j: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/uuuuuuazu/Desktop/entry/hbuildxProject/uniWx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
