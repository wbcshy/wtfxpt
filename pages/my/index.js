//index.js
//获取应用实例
var app = getApp()
var sta = require("../../utils/statistics.js");
Page({
  data: {
    userInfo: {},
    hasUserInfo: {},
    invitecode: "2425353",   //邀请码
  },
  onShow: function () {
  
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //复制邀请码
  setClipboardData(e) {
    var code = e.currentTarget.dataset.code;
    console.log(code);
    wx.setClipboardData({
      data: code,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },
  //进入订单列表页
  intoOrderList(e) {
    console.log(e);
    const status = e.currentTarget.dataset.orderStatus;
    wx.navigateTo({
      url: '/pages/order/list/index?status=' + status,
    })
  },
  getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  userdata: function () {
    wx.navigateTo({ url: "/pages/userdata/userdata" });
  },
  address: function () {
    wx.navigateTo({ url: "/pages/address/address" });
  },
  
  order: function () {
    //订单
    wx.navigateTo({ url: "/pages/order/order" });
  },
  keep: function () {
    //收藏
  },
  share: function () {
    //分享
  },
  //登录商家后台，使用核销
  enterShop: function () {
    wx.navigateTo({ url: "/pages/merchant/login/index" });
  },
  //进入分销中心
  distribution: function() {
    //订单
    wx.navigateTo({ url: "/pages/distribution/index" });
  }
})
