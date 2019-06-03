/**
 * 平台相关的模拟数据
 */
import {
  config
} from '../api.js'
var util = require('../utils/util.js')

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
  }, {
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
  }, {
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



function getArrayByshopData() {
  var writeoff = [{
      money: 2354, //核销金额
      order: 57, //核销订单
      customer: 89, //消费顾客数
      date: '1556775161'
    },
    {
      money: 1354, //核销金额
      order: 67, //核销订单
      customer: 99, //消费顾客数
      date: '1556861561'
    }, {
      money: 3354, //核销金额
      order: 77, //核销订单
      customer: 82, //消费顾客数
      date: '1556947961'
    }, {
      money: 2394, //核销金额
      order: 50, //核销订单
      customer: 29, //消费顾客数
      date: '1557034361'
    }, {
      money: 1554, //核销金额
      order: 77, //核销订单
      customer: 89, //消费顾客数
      date: '1557120761'
    }, {
      money: 2354, //核销金额
      order: 57, //核销订单
      customer: 89, //消费顾客数
      date: '1557207161'
    }, {
      money: 2654, //核销金额
      order: 58, //核销订单
      customer: 39, //消费顾客数
      date: '1557293561'
    }
  ];
  var moneyArray = [];
  var orderArray = [];
  var customerArray = [];
  var dateArray = [];
  for (let i =0; i < writeoff.length; i ++) {
    let money = writeoff[i].money;
    let order = writeoff[i].order;
    let customer = writeoff[i].customer;
    let date = util.formatTimeTwo( Number(writeoff[i].date), 'Y-M-D');
    moneyArray.push(money);
    orderArray.push(order);
    customerArray.push(customer);
    dateArray.push(date);
  }
  return {
    moneyArray: moneyArray,
    orderArray: orderArray,
    customerArray: customerArray,
    dateArray: dateArray
  }

}

//商户数据营销统计部分
function getCanvas(barChart) {
  var result = getArrayByshopData();
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    grid: {
      left: 10,
      right: 10,
      bottom: 45,
      top: 60,
      containLabel: true
    },
    legend: {
      data: ['消费客户', '核销订单', '核销金额']
    },
    xAxis: [{
      type: 'category',
      data: result.dateArray,
      axisPointer: {
        type: 'shadow'
      },
      axisLabel: {
        interval: 0,
        rotate: 45,
      },
    }],
    yAxis: [{
      type: 'value',
      name: '单位/个',
      min: 0,
      max: 800,
      interval: 100,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '单位/元',
      min: 0,
      max: 5000,
      interval: 500,
      axisLabel: {
        formatter: '￥{value}'
      }
    }
    ],
    series: [{
      name: '消费客户',
      type: 'bar',
      data: result.customerArray
    },
    {
      name: '核销订单',
      type: 'bar',
      data: result.orderArray
    },
    {
      name: '核销金额',
      type: 'line',
      yAxisIndex: 1,
      data: result.moneyArray
    }
    ],
    dataZoom: [
      //伸缩条样式属性设定
      {
        type: 'slider', //图表下方的伸缩条
        show: true, //是否显示
        realtime: true, //
        start: 0, //伸缩条开始位置（1-100），可以随时更改
        end: 100, //伸缩条结束位置（1-100），可以随时更改
        startValue: 0, //数据窗口范围的起始数值
        endValue: 100, //数据窗口范围的结束数值。
      },
      //滚轮属性设定
      {
        type: 'slider', //鼠标滚轮
        realtime: true,
        //还有很多属性可以设置，详见文档
      },
    ]
  };
  barChart.setOption(option);
}

module.exports = {
  cartList,
  orderList,
  orderInfo,
  advertisement,
  host,
  getArrayByshopData: getArrayByshopData,
  getCanvas: getCanvas
}