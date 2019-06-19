const app = getApp()

Page({
  data: {
    inputShowed: false,  //搜索栏是否展示
    inputVal: "",   //输入框内容
  },
  onReady: function() {
    //获得popup弹窗组件
    this.popup = this.selectComponent("#popup");
  },
  //展示搜索按钮
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  //隐藏搜索按钮
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  //获取输入框内容
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //展示弹窗
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
  //点击搜索事件
  search() {
    wx.redirectTo({
      url: '/pages/item/list/index?inputVal=' + this.data.inputVal,
    });
  }
  
});