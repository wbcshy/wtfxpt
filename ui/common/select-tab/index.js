Component({
  properties: {
    //下拉框弹出的内容数组
    typeArray: {
      type: Array,
      value: []
    },
    //表示选项栏是否选中
    select: {
      type: Boolean,
      value: false
    },
    //商品分类
    itemType: {
      type: String,
      value: ''
    },
    //地区选择
    itemArea: {
      type: String,
      value: ''
    },
    //推荐类型
    itemRecommand: {
      type: String,
      value: ''
    }
  },
  data: {
    flag: true, //表示下拉框内容是否隐藏
  },
  methods: {
    //展示下拉框内容
    showDropdownBox: function(e) {
      var value = e.currentTarget.dataset;
      const self = this;
      self.setData({
        flag: false
      });
      this.triggerEvent('select', {
        data: value
      }, {});
    },
    //收起下拉框内容
    hideDropdownBox: function(e) {
      const self = this;
      self.setData({
        flag: true
      });
    },
    //选中选项事件
    getTypeInfo: function(e) {
      var value = e.currentTarget.dataset;
      console.log(value);
      this.triggerEvent('getTypeInfo', {
        data: value
      }, {});
    }
  }
});