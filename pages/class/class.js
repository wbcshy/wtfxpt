// pages/class/class.js
const app = getApp();
const link = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [], // 左侧导航
    navRightItems: [], // 右侧产品
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var navLeftItems = [
      "热门推荐",
      "手机数码",
      "女装内衣",
      "男装内衣",
      "家用电器",
      "鞋靴箱包",
      "运动户外",
      "电脑办公",
      "美妆护肤",
      "个护清洁",
      "生活充值",
      "家用建材",
      "家居家纺"
    ];
    var navRightItems = [
      [{
          "title": "热门分类",
          "desc": [{
              "text": "U盘",
              "img": "../../images/classify/usb.png"
            },
            {
              "text": "牛奶",
              "img": "../../images/classify/milk.png"
            },
            {
              "text": "充电宝",
              "img": "../../images/classify/power.png"
            },
            {
              "text": "洗衣液",
              "img": "../../images/classify/laundry.png"
            },
            {
              "text": "男士内裤",
              "img": "../../images/classify/briefs.png"
            },
            {
              "text": "耳机",
              "img": "../../images/classify/headset.png"
            },
            {
              "text": "路由器",
              "img": "../../images/classify/router.png"
            },
            {
              "text": "吃鸡神器",
              "img": "../../images/classify/game.png"
            },
            {
              "text": "剃须刀",
              "img": "../../images/classify/shaver.png"
            },
            {
              "text": "大闸蟹",
              "img": "../../images/classify/crab.png"
            }
          ]
        },
        {
          "title": "热卖手机",
          "desc": [{
              "text": "小米",
              "img": "../../images/classify/miphone.png"
            },
            {
              "text": "华为",
              "img": "../../images/classify/huawei.png"
            },
            {
              "text": "vivo",
              "img": "../../images/classify/phone.png"
            }
          ]
        },
        {
          "title": "家电热搜",
          "desc": [{
              "text": "微波炉",
              "img": "../../images/classify/microwave.png"
            },
            {
              "text": "电饭煲",
              "img": "../../images/classify/cooker.png"
            }
          ]
        }
      ],
      [{
          "title": "手机品牌",
          "desc": [{
              "text": "小米",
              "img": "../../images/classify/miphone.png"
            },
            {
              "text": "华为",
              "img": "../../images/classify/huawei.png"
            },
            {
              "text": "vivo",
              "img": "../../images/classify/phone.png"
            }
          ]
        },
        {
          "title": "手机配件",
          "desc": [{
              "text": "充电宝",
              "img": "../../images/classify/power.png"
            },
            {
              "text": "耳机",
              "img": "../../images/classify/headset.png"
            },
            {
              "text": "吃鸡神器",
              "img": "../../images/classify/game.png"
            }
          ]
        }
      ]
    ];

    this.setData({
      navLeftItems: navLeftItems,
      navRightItems: navRightItems
    })



    // // 显示loading
    // link.showLoading()
    // // 请求分类数据
    // link.ajax({
    //   url: `${app.globalData.defaultURL}/api/profiles/productions`
    // }, ({
    //   data: res
    // }) => {
    //   this.setData({
    //     navLeftItems: res.navLeftItems,
    //     navRightItems: res.navRightItems
    //   })
    //   // 隐藏loading
    //   link.hideLoading()
    // })


  },
  // 改变tab栏
  currentTabs({
    currentTarget: {
      dataset: {
        index: item
      }
    }
  }) {
    this.setData({
      curIndex: item
    })
  },
  // 去往列表页
  gotoProductDetail({
    currentTarget: {
      dataset: {
        product: name
      }
    }
  }) {
    wx.navigateTo({
      url: `/pages/productlist/productlist?name=${name}`
    })
  }
})