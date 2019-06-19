import {
  config
} from '../../api.js'
import vdata from '../../utils/virtual-data.js'

//index.js
var common = require("../../utils/common.js");
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    token: '',
    hasUserInfo: false,
    scrollStat: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //首页加载初始化
  onLoad: function() {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo,
      token: app.globalData.token,
    });
    
    that.init();
  },
  //滚动屏幕时触发事件
  onPageScroll: function(e) {
    var that = this;
    if (e.scrollTop > 80) {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      });
      that.setData({
        scrollStat: true
      });
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ffffff'
      });
      that.setData({
        scrollStat: false
      });
    }
  },
  goHot() {
    wx.navigateTo({
      url: '/pages/item/list/index',
    })
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
  },
  //首页加载时一些分类数据
  init() {
    var self = this;
    //活动部分数据查询
    self.initBanner({
      title: "今日上新"
    }, 1);
    self.initBanner({
      title: "超值特惠"
    }, 2);
    self.initBanner({
      title: "游玩专区"
    }, 3);
  },
  //初始化首页广告栏部分
  initBanner(data, flag) {
    var self = this;
    app.postRequest('/banner/item/list.do', data).then(res => {
      var itemList = res.data;
      if (flag == 1) { //今日上新部分
        self.setData({
          todayItemList: itemList
        });
      }
      if (flag == 2) { //超值特惠
        console.log(itemList);
        self.setData({
          czItemList: itemList
        });
      }
      if (flag == 1) { //游玩专区 
        self.setData({      
          ywItemList: itemList
        });
      }
    });
  }



})