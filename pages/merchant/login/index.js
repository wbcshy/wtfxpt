const app = getApp();
Page({
  data: {
    pageHeight: app.globalData.pageHeight,   //页面高度
    someData: {
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
    },
  },
  onLoad: function (option) {

  }

});