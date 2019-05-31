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
  }
});