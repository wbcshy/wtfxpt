// 授权页面
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    status: false,
    statusLocation: false,
    type: '1',
    bizId: '',
    sourceType: 0,
    notice: '',
    shareType: 'index',
  },

  //打开授权弹框
  openAuthorize() {
    wx.openSetting({
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {
        _this.getUserInfo();
      }
    })
  },

  //取消授权弹框
  exitAuthor() {

  },
  getPhoneNumber(e) {
    var data = {
      code: app.globalData.code,
      iv: e.detail.iv,
      encryptedData: e.detail.encryptedData
    };
    //授权
    app.postRequest('/appUser/getPhoneNumber', data).then((res) => {
      app.globalData.userInfo = res.data;
    })
  },

  // 获取用户信息
  getUserInfo() {
    var self = this;
    wx.getSetting({
      withCredentials: true,
      success: res => {
        if (res.authSetting['scope.userInfo']) { //如果用户已经存在登录
          //授权获取地理位置
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              self.setData({
                status: false
              });
              //获取经纬度
              wx.getLocation({
                type: 'wgs84',
                success: function success(res) {
                  console.log('位置相关信息：' + res);
                  //获取用户信息
                  wx.getUserInfo({
                    success: res => {
                      //向后台传code，iv，encryptedData获取token
                      var data = {
                        code: app.globalData.code,
                        iv: res.iv,
                        encryptedData: res.encryptedData,
                        type: self.data.type,
                        id: app.globalData.userId
                      };
                      console.log(data);
                      //授权
                      app.postRequest('/WxDecode.do', data).then((res) => {
                        let result = res.data;
                        console.log(result);
                        app.globalData.userInfo = result.data.userInfo;
                        app.globalData.token = result.data.token;
                        console.log(app.globalData.token + "......." + app.globalData.userInfo);
                        //首页
                        if (self.data.shareType == 'index') {
                          wx.switchTab({
                            url: '../index/index'
                          })
                        }
                      })
                    },
                    fail: res => {
                      self.setData({
                        status: true
                      })
                    }
                  });
                }
              });
            }
          })
        }
      }
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取参数
    let _this = this;
    wx.login({
      success: res => {
        app.globalData.code = res.code;
        //发布类型
        console.log(options.shareType);
        if (options.shareType != undefined) {
          _this.setData({
            shareType: options.shareType
          })
        }
        //执行函数
        _this.getUserInfo();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})