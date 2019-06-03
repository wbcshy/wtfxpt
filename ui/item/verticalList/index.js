Component({
  properties: {
    itemList: {
      type: Array,
      valeu: []
    },
    leftWidth: {
      type: String,
      value: '225'
    },
    rightWidth: {
      type: String,
      value: '445'
    },
    height: {
      type: String,
      value: '150'
    }
  },
  data: {
    sellOutImageUrl: 'https://wtfxpt.bcwgel.com/themes/item/sell-out-bg.png',   //售空背景图片
    activityEndImageUrl: 'https://wtfxpt.bcwgel.com/themes/item/activity-end-bg.png',  //活动已结束背景图片
  },
  methods: {
    getItemInfo(e) {
      //触发getItemInfo函数回调，进入到商品详情页面
      console.log(e);
      const id = e.currentTarget.dataset.id;   //商品id
      wx.navigateTo({
        url: '/pages/item/detail/index?id=' + id,
      })
    }
  } 


})