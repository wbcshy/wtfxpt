Component({
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    //渲染列表的商品数组
    itemList: {
      type: Array,
      value: []
    }
  },
  //封装的组件实现方法
  methods: {
    getItemInfo(e) {
      //触发getItemInfo函数回调，进入到商品详情页面
      console.log(e);
      const id = e.currentTarget.dataset.id;   //商品id
      wx.navigateTo({
        url: '/pages/itemdetail/index?id='+ id,
      })
    }
  }
});
