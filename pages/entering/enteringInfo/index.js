// pages/enteringInfo /index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {},   //表单提交数据

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onReady: function() {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  //提交入驻信息表单
  formSubmit: function(e) {
    var self = this;
    var value = e.detail.value;
    var data = {
      userCode: app.globalData.userInfo.userId,   //用户编号
      userDistrictCode: app.globalData.userInfo.userDistrictCode,   //用户所在地区
      phone: app.globalData.userInfo.phone,    //用户微信绑定的手机号码
      companyName: value.companyName,
      latitude: value.latitude,
      longitude: value.longitude,
      shopPhone: value.shopPhone,   
      shopName: value.shopName,     
      realName: value.realName,    //商户真实姓名
      shopType: value.shopType,
      shopAddress: value.shopAddress,   //店铺地址
    }
    self.setData({
      formData: data
    });
    self.showPopup();
    console.log(e);
  },
  //展示弹窗
  showPopup() {
    this.popup.showPopup();
  },
  //取消，关闭弹窗
  error() {
    this.popup.hidePopup();
  },
  //确认提交入驻信息
  success() {
    var self = this;
    this.popup.hidePopup();
    app.postRequest("/bussinessApprove/addItem.do", self.data.formData).then(res => {
      console.log(res);
      if (res.statusCode == 200) {   //表示提交数据成功
        wx.showToast({
          title: '提示',
          icon: 'success',
          image: '提交成功，正在跳转到结果页面',
          duration: 1500,
          mask: true,
          success: function(res) {
            wx.navigateTo({
              url: '/pages/entering/enteringResult/index',
            });
          },
          fail: function(res) {},
          complete: function(res) {},
        })
       
      } else {

      }
    });

   
  },
  /**
   * 用户选择位置
   * @returns {boolean}
   */
  chooseLocation: function() {
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
          shopAddress: res.address, //商家的详细地址
          addressName: res.name, //商家在地图上的名称
          latitude: res.latitude, //纬度
          longitude: res.longitude //经度

        });
      }
    });
  },

})