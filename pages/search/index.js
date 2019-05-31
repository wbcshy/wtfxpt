const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    activityStatus: true
  },
  onReady: function() {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
  },
  //取消关闭弹窗
  error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});