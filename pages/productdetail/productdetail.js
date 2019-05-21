var link = require('../../utils/common.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData:{},
    componentDatas:{
      btName:'支付',
      btDesc:'【白条支付】首单享立减优惠',
    },
    componentDatas2: {
      selectedName: '已选',
      selectedNums: 1
    },
    isShowPopup:false,
    isShowSelected:false,
    badgeCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({id}) {

    var productDetailList = {
      itemData: {
        "id": "3a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "loopImgUrl": [
          "../../images/index/product/pro2.jpg",
          "../../images/index/product/pro3.jpg",
          "../../images/index/product/pro4.jpg"
        ],
        "title": "下午茶 包含蛋糕 甜点 奶茶 环境优雅",
        "price": "199.00",
        "originPrice": "888.00",
        "count": 1,
        "shopName": "五条人糖水铺（观前街店）",   //店铺名称
        "consumptionDay": "5月10日-6月30日",   //劵消费日期
      }
    }
    
    
    this.setData({
      itemData: productDetailList.itemData,
      shopName: productDetailList.itemData.shopName,
      consumptionDay: productDetailList.itemData.consumptionDay
    })



    // link.showLoading()
  
    // link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/productionDetail`},res => {
    //   let result = null;
    //   res.data.forEach(item => {
    //     if (item.partData.id == id){
    //       result = item
    //     }
    //   })
    //   this.setData({
    //     partData: result.partData,
    //     baitiao: result.baitiao
    //   })

    //   link.hideLoading()
    // })
    
  },
  onItemImageLoad: function(e) {
    var imageSize = link.imageUtil(e);
    this.setData({
      itemImgWidth: imageSize.imageWidth,
      itemImgHeight: imageSize.imageHeight,
    });
    console.log(imageSize.imageHeight);
  },
  popupLayer(){
    this.setData({
      isShowPopup:true
    })
  },
  selectChangeFlag({detail}){
    let isBFQ = detail.desc == '不分期' ? '【白条支付】首单享立减优惠' : detail.desc;
    this.setData({
      componentDatas: {
        btName: '支付',
        btDesc: isBFQ
      }
    })
  },
  showSelected(){
    this.setData({
      isShowSelected: true
    })
  },
  getCartNums({detail}){
    this.data.componentDatas2.selectedNums = detail;
    this.setData({
      componentDatas2: this.data.componentDatas2
    })
    this.addCarts()
  },
  addCarts() {
    wx.getStorage({
      key: 'cartInfo',
      success: (res) => {
        const cartArr = res.data;
        let isFlag = false;
        cartArr.forEach(item => {
          if (item.id == this.data.partData.id) {
            item.total += this.data.partData.count
            wx.setStorage({
              key: 'cartInfo',
              data: cartArr,
            })
            isFlag = true
          }
        })

        if(!isFlag) {
          this.data.partData.total = this.data.partData.count
          cartArr.push(this.data.partData)
          wx.setStorage({
            key: 'cartInfo',
            data: cartArr,
          })
        }
        this.getProductTotal(cartArr)
      },
      fail:err => {
        this.data.partData.total = this.data.partData.count
        let newArr = [];
        newArr.push(this.data.partData)
        wx.setStorage({
          key: 'cartInfo',
          data: newArr,
        })
        this.getProductTotal(newArr)
      }
    })
    wx.showToast({
      title: '加入购物车成功'
    })
  },
  getProductTotal(arrLength){
    this.setData({
      badgeCount: arrLength.length
    })
  },
  gotoCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  goHome() {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'cartInfo',
      success:(res) => {
        this.getProductTotal(res.data)
      },
    })
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})