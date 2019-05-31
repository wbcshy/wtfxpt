// pages/class/class.js
import {
  config
} from '../../api.js'
import vdata from '../../utils/virtual-data.js'
const app = getApp();
const link = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [], // 左侧导航
    navRightItems: [], // 右侧产品
    curIndex: 0,
    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const host = config.imageHost;



    var navLeftItems = [
      "热销爆品",
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
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }]
        },
        {
          "title": "热卖手机",
          "desc": [{
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }]
        },
        {
          "title": "家电热搜",
          "desc": [{
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }]
        }
      ],
      [{
          "title": "手机品牌",
        "desc": [{
          'id': '1234', //商品编号
          'goodsId': 2, //商品所属类目ID
          'sellId': '2324', //商家id
          'name': "520特刊", //商品名称
          'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
          'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
          'pulish': 1, //总平台是否上架
          'saleQuantity': 23, //已售数量
          'sumStock': 999, //上架商品库存总数
          'startDate': '1559282086', //活动开始日期    
          'endDate': '1561874086', //活动结束日期
          'originalPrice': '144.00', //原价
          'price': '15.00', //现在售价
          'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
          'shopName': '海鲜龙虾'
        }, {
          'id': '1234', //商品编号
          'goodsId': 2, //商品所属类目ID
          'sellId': '2324', //商家id
          'name': "520特刊", //商品名称
          'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
          'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
          'pulish': 1, //总平台是否上架
          'saleQuantity': 23, //已售数量
          'sumStock': 999, //上架商品库存总数
          'startDate': '1559282086', //活动开始日期    
          'endDate': '1561874086', //活动结束日期
          'originalPrice': '144.00', //原价
          'price': '15.00', //现在售价
          'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
          'shopName': '海鲜龙虾'
        }, {
          'id': '1234', //商品编号
          'goodsId': 2, //商品所属类目ID
          'sellId': '2324', //商家id
          'name': "520特刊", //商品名称
          'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
          'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
          'pulish': 1, //总平台是否上架
          'saleQuantity': 23, //已售数量
          'sumStock': 999, //上架商品库存总数
          'startDate': '1559282086', //活动开始日期    
          'endDate': '1561874086', //活动结束日期
          'originalPrice': '144.00', //原价
          'price': '15.00', //现在售价
          'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
          'shopName': '海鲜龙虾'
        }, {
          'id': '1234', //商品编号
          'goodsId': 2, //商品所属类目ID
          'sellId': '2324', //商家id
          'name': "520特刊", //商品名称
          'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
          'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
          'pulish': 1, //总平台是否上架
          'saleQuantity': 23, //已售数量
          'sumStock': 999, //上架商品库存总数
          'startDate': '1559282086', //活动开始日期    
          'endDate': '1561874086', //活动结束日期
          'originalPrice': '144.00', //原价
          'price': '15.00', //现在售价
          'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
          'shopName': '海鲜龙虾'
        }]
        },
        {
          "title": "手机配件",
          "desc": [{
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }, {
            'id': '1234', //商品编号
            'goodsId': 2, //商品所属类目ID
            'sellId': '2324', //商家id
            'name': "520特刊", //商品名称
            'picUrl': host + '/themes/item/cz.jpg', //商品页面商品图片
            'feature': "最新上的水果，味道很好哟！最新上的水果，味道很好哟 最新上的水果，味道很好哟", //卖点
            'pulish': 1, //总平台是否上架
            'saleQuantity': 23, //已售数量
            'sumStock': 999, //上架商品库存总数
            'startDate': '1559282086', //活动开始日期    
            'endDate': '1561874086', //活动结束日期
            'originalPrice': '144.00', //原价
            'price': '15.00', //现在售价
            'soldItemsStatus': 20, //活动结束表示或者是否卖完等表示  0 正常 10热卖 20打折 30卖完了  40活动结束
            'shopName': '海鲜龙虾'
          }]
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
        id: id
      }
    }
  }) {
    wx.navigateTo({
      url: `/pages/item/detail?name=${id}`
    })
  }
})