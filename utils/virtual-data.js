/**
 * 平台相关的模拟数据
 */
import {
  config
} from '../api.js'

const host = config.imageHost;

//广告部分数据结构
const advertisement = {
  'homeCarouselMap': [ //首页轮播图广告
    {
      'itemId': '1234',
      'title': '',
      'url': host + '/themes/item/pro2.jpg'
    },
    {
      'itemId': '1234',
      'title': '',
      'url': host + '/themes/item/pro3.jpg'
    },
    {
      'itemId': '1234',
      'title': '',
      'url': host + '/themes/item/pro4.jpg'
    }
  ],
  'hotItemAdvertisement': [{
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



//购物车部分
const cartList = [{
    'id': '212344',
    'data-sku-id': '234353',
    'image': host + '/themes/item/cooker.png',
    'title': '新型家用电饭煲',
    'price': '234',
    'desc': '这是一个很好用的电饭煲哟',
    'total': '1',
  },
  {
    'id': '212344',
    'data-sku-id': '234353',
    'image': host + '/themes/item/cooker.png',
    'title': '新型家用电饭煲',
    'price': '234',
    'desc': '这是一个很好用的电饭煲哟',
    'total': '2',
  }
];



//订单部分
const orderList = [{
    'orderId': '243453', //订单id
    'state': '10', //订单状态
    'sn': '2000000000007117', //单号
    'name': '汪本成',
    'phone': '13913695753',
    'receive_address': '苏州市姑苏区苏商新地一幢411室',
    'freight_fee': '0', //运费
    'goods_num': '3',
    'amount': '1345',
    'if_evaluate': false, //是否评价
    'if_pay': true, //是否支付
    'if_receive': false, //是否收货
    'create_time': '1559144048',
    'goodsList': [ //商品列表
      {
        'id': '212344',
        'image': host + '/themes/item/cooker.png',
        'title': '新型家用电饭煲',
        'price': '234',
        'desc': '这是一个很好用的电饭煲哟',
        'total': '1',
      },
      {
        'id': '212344',
        'image': host + '/themes/item/cooker.png',
        'title': '新型家用电饭煲',
        'price': '234',
        'desc': '这是一个很好用的电饭煲哟',
        'total': '2',
      }
    ]
  },
  {
    'orderId': '243453', //订单id
    'state': '10', //订单状态
    'sn': '2000000000007117', //单号
    'name': '汪本成',
    'phone': '13913695753',
    'receive_address': '苏州市姑苏区苏商新地一幢411室',
    'freight_fee': '0', //运费
    'goods_num': '3',
    'amount': '1345',
    'if_evaluate': false, //是否评价
    'if_pay': true, //是否支付
    'if_receive': false, //是否收货
    'create_time': '1559144048',
    'goodsList': [ //商品列表
      {
        'id': '212344',
        'image': host + '/themes/item/cooker.png',
        'title': '新型家用电饭煲',
        'price': '234',
        'desc': '这是一个很好用的电饭煲哟',
        'total': '1',
      },
      {
        'id': '212344',
        'image': host + '/themes/item/cooker.png',
        'title': '新型家用电饭煲',
        'price': '234',
        'desc': '这是一个很好用的电饭煲哟',
        'total': '2',
      }
    ]
  }
];

//订单详情
const orderInfo = {
  'orderId': '243453', //订单id
  'state': '10', //订单状态
  'sn': '2000000000007117', //单号
  'name': '汪本成',
  'phone': '13913695753',
  'receive_address': '苏州市姑苏区苏商新地一幢411室',
  'freight_fee': '0', //运费
  'goods_num': '3',
  'amount': '1345',
  'if_evaluate': false, //是否评价
  'if_pay': true, //是否支付
  'if_receive': false, //是否收货
  'create_time': '1559144048', //下订单时间  以时间戳形式
  'goodsList': [ //商品列表
    {
      'id': '212344',
      'image': host + '/themes/item/cooker.png',
      'title': '新型家用电饭煲',
      'price': '234',
      'desc': '这是一个很好用的电饭煲哟',
      'total': '1',
    },
    {
      'id': '212344',
      'image': host + '/themes/item/cooker.png',
      'title': '新型家用电饭煲',
      'price': '234',
      'desc': '这是一个很好用的电饭煲哟',
      'total': '2',
    }
  ]
}

module.exports = {
  cartList,
  orderList,
  orderInfo,
  advertisement,
  host
}