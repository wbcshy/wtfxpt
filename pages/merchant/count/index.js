const app = getApp();
var template = require('../../template/merchant/tabbar/index.js');
Page({
  data: {
    tabIndex: 1,
    charts: [{
      id: 'week',
      name: '近一周'
    }, {
      id: 'twoweek',
      name: '近十五天'
    }, {
      id: 'onemonth',
      name: '近一个月'
    }, {
      id: 'threemonth',
      name: '近三个月'
    }, {
      id: 'sixmonth',
      name: '近半年'
    }, {
      id: 'year',
      name: '近一年'
    }]
  },
  onLoad: function(option) {
    var that = this;
    template.tabbar("tabBar", this.data.tabIndex, this) //1表示第二个tabbar
    
  },
  
 
});