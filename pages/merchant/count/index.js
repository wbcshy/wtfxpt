const app = getApp();
var template = require('../../template/merchant/tabbar/index.js');
var wxCharts = require('../../../libs/wx-charts/wxcharts-min.js');
Page({
  data: {
    tabIndex: 1,
  },
  onLoad: function(option) {
    var that = this;
    template.tabbar("tabBar", this.data.tabIndex, this) //1表示第二个tabbar
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
      that.showWeekCharts(windowWidth);
      that.showMonthCharts(windowWidth);
    } catch (e) {
      // do something when get system info failed
    }
  },
  //展示近一周的数据
  showWeekCharts(width) {
    new wxCharts({
      animation: true,
      title: {
        color: '#FD3047'
      },
      canvasId: 'order-customer-week',
      type: 'column',
      categories: ['2018-9-1', '2018-9-2', '2018-9-3', '2018-9-4', '2018-9-5', '2018-9-6', '2018-9-7'],
      series: [{
        name: '核销订单数',
        data: [150, 20, 45, 37, 4, 80, 34]
      }, {
        name: '消费客户',
        data: [708, 40, 65, 100, 34, 18, 34]
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        title: '数量/个'
      },
      width: width,
      height: 220
    });
    new wxCharts({
      animation: true,
      enableScroll: true,
      canvasId: 'lineCanvas-week',
      type: 'column',
      categories: ['2018-9-1', '2018-9-2', '2018-9-3', '2018-9-4', '2018-9-5', '2018-9-6', '2018-9-7'],
      series: [{
        name: '核销金额',
        data: [250.45, 290.00, 450.23, 370.00, 400.00, 800.67, 343.23]
      }],
      yAxis: {
        format: function(val) {
          return val;
        },
        title: '金额/元',
      },
      width: width,
      height: 220
    });
  },//展示近一周的数据
  showMonthCharts(width) {
    new wxCharts({
      animation: true,
      title: {
        color: '#FD3047'
      },
      canvasId: 'order-customer-month',
      type: 'line',
      categories: ['2018-9-1', '2018-9-2', '2018-9-3', '2018-9-4', '2018-9-5', '2018-9-6', '2018-9-7'],
      series: [{
        name: '核销订单数',
        data: [150, 20, 45, 37, 4, 80, 34]
      }, {
        name: '消费客户',
        data: [708, 40, 65, 100, 34, 18, 34]
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        title: '数量/个'
      },
      width: width,
      height: 220
    });
    new wxCharts({
      animation: true,
      canvasId: 'lineCanvas-month',
      type: 'line',
      categories: ['2018-9-1', '2018-9-2', '2018-9-3', '2018-9-4', '2018-9-5', '2018-9-6', '2018-9-7'],
      series: [{
        name: '核销金额',
        data: [250.45, 290.00, 450.23, 370.00, 400.00, 800.67, 343.23]
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        title: '金额/元',
      },
      width: width,
      height: 220
    });
  }
});