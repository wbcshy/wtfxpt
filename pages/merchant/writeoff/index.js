const app = getApp();
var template = require('../../template/merchant/tabbar/index.js');
Page({
  data: {
    tabIndex: 1,
  },
  onLoad: function(option) {
    template.tabbar("tabBar", this.data.tabIndex, this) //1表示第二个tabbar
  },
  onReady: function() {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
  },
  //取消核销订单
  error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认核销订单
  success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  },
  

});