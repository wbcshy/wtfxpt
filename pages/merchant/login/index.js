const app = getApp();
Page({
  data: {
    account: "",   //用户账号
    password: "", //商户密码
  },
  //页面加载
  onLoad: function (option) {

  },
  //获取账号信息
  account: function(e) {
    this.setData({
      account: e.detail.value
    });
  },
  //获取密码
  password: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  //点击登录
  login: function (e) {
    var self = this;
    console.log(self.data.account + "...." + self.data.password);   //打印登录账号和密码
    wx.navigateTo({
      url: '/pages/merchant/control/index',
    })
  },
  //进入商家入驻页面
  intoEntering: function(e) {
    wx.navigateTo({
      url: '/pages/entering/enteringDesc/index',
    })
  }


});