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
    //商品分类选择
    app.postRequest('/itemGoods/itemCategoryList.do',{}).then(res=> {
      console.log(res.data);
      const array = res.data;
      var typeArray = [];
      for (let i = 0; i < res.data.length; i ++) {
        typeArray.push(array[i]);
      }
      self.setData({
        typeArray: typeArray
      });
    });
  }
});