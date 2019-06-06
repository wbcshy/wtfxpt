//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        that.globalData.platform = res.platform
        let totalTopHeight = 68
        if (res.model.indexOf('iPhone X') !== -1) {
          totalTopHeight = 88
        } else if (res.model.indexOf('iPhone') !== -1) {
          totalTopHeight = 64
        }
        that.globalData.statusBarHeight = res.statusBarHeight
        that.globalData.titleBarHeight = totalTopHeight - res.statusBarHeight

        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        
        that.globalData.pageHeight = height
      },
      failure() {
        that.globalData.statusBarHeight = 0
        that.globalData.titleBarHeight = 0
      }
    })
  },
  globalData: {
    userInfo: {}, //用户信息
    userId: '', //用户userId
    code: '',
    version: '1.0.0',
    url: 'http://127.0.0.1:9005',    //本地请求接口url
    token: '',                       //access_token
    appId: 'wx39724df7ed09b039',    
    hareType: 0, //分享方式,
    shareUserId: '', //分享人id
    shareName: '',    // 分享人姓名
    balanceItem: {}, //余额详情
    payResult: {},//支付结果
    appUserId: '', //店铺id
    code: null, //登录code
    addressCode: '',
    addressName: '',
    phone: '',
    currentAddress: {}, //当前选择地址
    positionAddress: {}, //定位位置
    areaCode: {
      provinceName: '',
      provinceCode: '',
      cityName: '',
      cityCode: '',
      countyName: '',
      countyCode: ''
    }, //选择收货地址模板
    realName: '',
  },
  //封装的request方法
  wxPromisify(fn) {
    return function (obj = {}) {
      return new Promise((resolve, reject) => {
        obj.success = function (res) {
          //成功
          resolve(res)
        }
        obj.fail = function (res) {
          //失败
          reject(res)
        }
        fn(obj)
      })
    }
  },

  getRequest(url, data) {
    let urlReal = this.globalData.url + url;
    var getRequest = this.wxPromisify(wx.request);
    return getRequest({
      url: urlReal,
      method: 'GET',
      data: data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': this.globalData.token
      }
    })
  },
  postRequest(url, data) {
    let urlReal = this.globalData.url + url;
    var postRequest = this.wxPromisify(wx.request);
    return postRequest({
      url: urlReal,
      method: 'POST',
      data: data,
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'Authorization': this.globalData.token
      },
    })
  }
})