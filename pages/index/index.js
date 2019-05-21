//index.js
var common = require("../../utils/common.js");
//获取应用实例
const app = getApp()


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    bp_height: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //首页广告栏位图片
    imgUrls: [
      '../../images/index/product/pro2.jpg',
      '../../images/index/product/pro3.jpg',
      '../../images/index/product/pro4.jpg'
    ],
    //爆品上新部分广告图片
    baopinImgUrls: [{
      id: 3456,
      soldNum: 23,
      url: "../../images/index/baopin/baopin1.jpg",
      shopName: "520特刊",
      title: "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟",
      orginPrice: 144.00,
      curPrice: 15.00
    }, {
      id: 3456,
      soldNum: 23,
      url: "../../images/index/baopin/baopin2.jpg",
      shopName: "千禧家玉米烤肉",
      title: "最新上的水果，味道很好哟！最新上的水果，味道很好哟",
      orginPrice: 144.00,
      curPrice: 15.00
    }, {
      id: 3456,
      soldNum: 23,
      url: "../../images/index/baopin/baopin3.jpg",
      shopName: "龙镇酒驾",
      title: "最新上的水果，味道很好哟！最新上的水果，味道很好哟",
      orginPrice: 144.00,
      curPrice: 15.00
    }]
  },
  //跳转搜索页
  goSearch: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
      console.log(app);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        }
      })
    }

    //同步获取屏幕信息，现在用到的是屏幕宽高
    var res = wx.getSystemInfoSync();
  },
  onShow: function(option) {
    var that = this;
    var bpClassArray = ["bp-image-content", "zong-item-desc", "zong-item-info", "nav1"];
    common.getElementsHeightByClasses(bpClassArray).then(function(bpClassArray) {
      console.log(bpClassArray);
      that.setData({
        bp_height: bpClassArray
      });
    });
  },
  //获取登录小程序的用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})