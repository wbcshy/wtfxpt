Component({
  properties: {
    backgroundColor: {
      type: String,
      value: "#fd3047"
    },
    placeholder: {
      type: String,
      value: ''
    },
    weuiText: {
      type: String,
      value: ''
    }
  },
  data: {
    inputShowed: false,   //是否展示搜索和取消两个功能按钮
    inputVal: "", //搜索框内的内容
  },
  methods: {
    //展示
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    //取消
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    //清除输入框内容
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    },
    //获取输入框内容
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    },
    //点击搜索
    search:function() {
      console.log(this.data.inputVal);
      this.triggerEvent('searchItemList', {
        data: this.data.inputVal
      }, {});
    }
  }
});
