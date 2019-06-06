const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    typeArray:[],   //分类内容
  },
  onReady: function () {
    var self = this;
    self.init();
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
  },
  //页面初始化相关
  init() {
    var self = this;
    app.postRequest('/itemGoods/itemCategory.do',{name:'网红打卡'}).then(res=> {
      console.log(res.data);
    });
  }
});