import * as echarts from '../../../../components/common/ec-canvas/echarts.js';
var vdata = require('../../../../utils/virtual-data.js')
var app = getApp();
var barChart = null;
Page({
  data: {
    ecBar: {
      onInit: function(canvas, width, height) {
        barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        return barChart;
      }
    },
    windowHeight: 0,
    headerHeight: 0,
    barHeight: 0,
    canvasHeight: 0

  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        //页面相关数据设置
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          barHeight: app.globalData.statusBarHeight + app.globalData.titleBarHeight
        });
      },
    });
    that.getElementInfoByClass("control");

    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1500
    });
    setTimeout(that.getVirtureData, 1500);
    vdata.getArrayByshopData();
  },
  //获取相关后台数据并渲染图表
  getData() {
    wx.showLoading({
      title: '加载中...',
    });

    wx.request({
      url: 'https://',
      method: 'get',
      data: {
        day: '2424242'
      },
      dataType: 'jsonp',
      success: function(res) {

      }
    })
  },
  //模拟后台数据进行渲染图标
  getVirtureData() {
    wx.hideLoading();
    vdata.getCanvas(barChart);
    
   
  },
  //通过class获取一些对象属性值
  getElementInfoByClass(className) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.' + className).boundingClientRect().exec(function(res) {
      that.setData({
        headerHeight: res[0].height
      });
      const height = that.data.windowHeight - that.data.headerHeight - that.data.barHeight;
      that.setData({
        canvasHeight: height
      });
    });
  },
});