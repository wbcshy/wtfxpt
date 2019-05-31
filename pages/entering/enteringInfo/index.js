// pages/enteringInfo /index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //提交入驻信息表单
  formSubmit: function(e) {
    
  },
  /**
 * 用户选择位置
 * @returns {boolean}
 */
  chooseLocation: function () {
    // console.log(1)
    var that = this;
    wx.chooseLocation({
      success: function success(res) {
        console.log(res);
        if (res.name.length <= 0) {
          return that.setData({
            userSite: res.address
          });
        }
        that.setData({
          shopAddress: res.address,   //商家的详细地址
          addressName: res.name,    //商家在地图上的名称
          latitude: res.latitude,   //纬度
          longitude: res.longitude   //经度

        });
      }
    });
  },
  
})