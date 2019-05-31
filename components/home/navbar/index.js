// components/home/navbar/index.js
const app = getApp()
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerTitle: {
      type: String,
      value: '头部标题'
    },
    scrollStat: {
      type: Boolean,
      value: false
    },
    imageUrl: {
      type: String,
      value: "设置的是背景海报的图片路径"
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {
      statusBarHeight: app.globalData.statusBarHeight,
      titleBarHeight: app.globalData.titleBarHeight
    }
  },
  methods: {
    // 这里是一个自定义方法
    goback: function () {
      wx.navigateBack({
        delta: 1,
      })
    },
    //跳转去搜索页
    goSearch: function () {
      wx.navigateTo({
        url: '../search/index',
      })
    },
  }
})