const app = getApp();
var template = require('../../template/merchant/tabbar/index.js');
Page({
  data: {
    shopcode: "2425353",
    tabIndex: 2,
  },
  onLoad: function() {
    var that = this;
    template.tabbar("tabBar", this.data.tabIndex, this) //1表示第二个tabbar
  },
  setClipboardData(e) {
    var code = e.currentTarget.dataset.code;
    console.log(code);
    wx.setClipboardData({
      data: code,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1500
        })
      }
    })
  },
  //进入分销信息统计的详情页面
  intoDistributionDetail(e) {
    const status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: '/pages/merchant/detail/index?status=' + status,
    });
  }
});