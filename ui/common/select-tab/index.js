Component({
  properties: {
    //下拉框弹出的内容数组
    typeArray: {
      type: Array,
      value: []
    },
    
  },
  data: {
    flag: true,  //表示下拉框内容是否隐藏
  },
  methods: {
    //展示下拉框内容
    showDropdownBox: function(e) {
      const self = this;
      self.setData({
        flag: false
      });
    },
    //收起下拉框内容
    hideDropdownBox: function(e) {
      const self = this;
      self.setData({
        flag: true
      });
    }
  }
});
