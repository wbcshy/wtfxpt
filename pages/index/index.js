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
    hotItemAdvertisement: [],   
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
  //去我的收藏页面
  goCollection() {
    wx.navigateTo({
      url: '/pages/my/collection/index',
    })
  },
  //进入分销页面
  goDistribution() {
    wx.navigateTo({
      url: '/pages/distribution/index',
    })
  },
  //进入商家入驻页面
  goEntering() {
    wx.navigateTo({
      url: '/pages/entering/enteringDesc/index',
    })
  }

  

})