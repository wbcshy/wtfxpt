import {config} from '../../api.js'
import vdata from '../../utils/virtual-data.js'

//index.js
var common = require("../../utils/common.js");
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    scrollStat: false,
    imageTest: config.imageHost + '/themes/item/cz.jpg',
    homeCarouselMap: [],   //首页轮播图广告
    hotItemAdvertisement: [],   //爆品上新部分广告图片
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function() {
    var that = this;
    that.setData({
      homeCarouselMap: vdata.advertisement.homeCarouselMap,
      hotItemAdvertisement: vdata.advertisement.hotItemAdvertisement
    });

  },
  //滚动屏幕时触发事件
  onPageScroll: function(e) {
    var that = this;
    if(e.scrollTop > 80) {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      });
      that.setData({
        scrollStat: true
      });
    }else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ffffff'
      });
      that.setData({
        scrollStat: false
      });
    }
  },
  

  

})