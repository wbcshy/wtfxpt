const app = getApp();
var template = require('../../template/merchant/tabbar/index.js');
import {config} from '../../../config.js'
Page({
  data: {
    tabIndex: 0,
  },
  onLoad: function(option) {
    template.tabbar("tabBar", this.data.tabIndex, this)//0表示第一个tabbar
  },
  //进入手动核销页面
  manual() {
    wx.navigateTo({
      url: '/pages/merchant/writeoff/index',
    })
  },
  //拨号给这边客服
  dial: function(e) {
    wx.makePhoneCall({
      phoneNumber: config.hotline,
    })
  }

});