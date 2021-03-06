const app = getApp();

Page({
  data: {
    invitecode: "2425353"
  },
  onLoad: function() {

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
      url: '/pages/distribution/detail/index?status=' + status,
    })
  }
});