const link = require('../../../utils/common.js');
import vdata from '../../../utils/virtual-data.js'
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemData: {},
    hidden: true,
    componentDatas2: {
      selectedName: '已选',
      selectedNums: 1
    },
    recommandItenList: [],
    isShowPopup: false,
    isShowSelected: false,
    badgeCount: 0,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function({id}) {

    var productDetailList = {
      itemData: {
        "id": "3a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "loopImgUrl": [ //轮播图展示图片
          "../../images/index/product/pro2.jpg",
          "../../images/index/product/pro3.jpg",
          "../../images/index/product/pro4.jpg"
        ],
        "itemImgUrl": [ //商品展示部分图片
          "../../images/index/product/pro2.jpg",
          "../../images/index/product/pro3.jpg",
          "../../images/index/product/pro4.jpg"
        ],
        "title": "下午茶 包含蛋糕 甜点 奶茶 环境优雅",
        "price": "199.00",
        "originPrice": "888.00",
        "count": 1,
        "shopName": "五条人糖水铺（观前街店）", //店铺名称
        "consumptionDay": "5月10日-6月30日", //劵消费日期
        "poster": {
          "backgroundImageUrl": "../../images/index/product/pro2.jpg",
        }
      }
    }

    this.setData({
      itemData: productDetailList.itemData,
      shopName: productDetailList.itemData.shopName,
      consumptionDay: productDetailList.itemData.consumptionDay,
      recommandItenList: vdata.advertisement.hotItemAdvertisement

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
  //图片加载时获取图片原始宽高和自适应后的宽高
  onItemImageLoad: function(e) {
    var imageSize = link.imageUtil(e);
    this.setData({
      itemImgWidth: imageSize.imageWidth,
      itemImgHeight: imageSize.imageHeight,
    });
    console.log(imageSize.imageHeight);
  },
  popupLayer() {
    this.setData({
      isShowPopup: true
    })
  },
  showSelected() {
    this.setData({
      isShowSelected: true
    })
  },
  getCartNums({
    detail
  }) {
    this.data.componentDatas2.selectedNums = detail;
    this.setData({
      componentDatas2: this.data.componentDatas2
    })
    this.addCarts()
  },
  addCarts() {
    var item = {
      
    };
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success'
    })
  },
  getProductTotal(arrLength) {
    this.setData({
      badgeCount: arrLength.length
    })
  },
  gotoCart() {
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  goHome() {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  //生成海报方法实现
  generatePoster() {

    var self = this;
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    self.setData({
      windowWidth: windowWidth,
      windowHeight: windowHeight,
      hidden: true
    });



    //通过使用wx.getImageInfo这个API来下载一个网络图片到本地（并可获取该图片的尺寸等其他信息），
    //然后调用ctx.drawImage方法将图片绘制到画布上，填满画布。
    //图片的src地址，请使用小程序内合法域名生成的图片地址。
    const wxGetImageInfo = link.promisify(wx.getImageInfo)
    //绘制二维码
    Promise.all([
      //背景图
      wxGetImageInfo({
        src: 'https://wtfxpt.bcwgel.com/poster/bg-1.jpg' //背景图片
      }),
      //二维码
      wxGetImageInfo({
        src: 'https://wtfxpt.bcwgel.com/poster/erwei2.jpg'
      })
    ]).then(res => {
      console.log(res)

      const ctx = wx.createCanvasContext('myCanvas')
      ctx.clearRect(0, 0, 400, 200);
     
      wx.showToast({
        title: '海报生成中',
        icon: 'loading',
        duration: 2000,
        success: function() {
          setTimeout(function() {
             
            if (res[0].errMsg == "getImageInfo:ok" && res[1].errMsg == "getImageInfo:ok") {
              // 设置矩形边框
              ctx.setStrokeStyle('#fff');
              // 设置矩形宽高
              ctx.strokeRect(0, 0, 400, 200);
              // 底图
              ctx.drawImage(res[0].path, 0, 0, 400, 400);

              //写入文字
              ctx.setTextAlign('center') // 文字居中
              ctx.setFillStyle('#f3a721') // 文字颜色：黑色
              ctx.setFontSize(22) // 文字字号：22px
              ctx.fillText("苏州优享平台", windowWidth / 2, windowHeight / 2)

              // 小程序码
              const qrImgSize = 150
              ctx.drawImage(res[1].path, (windowWidth - qrImgSize) / 2, windowHeight / 1.8, qrImgSize, qrImgSize)

              ctx.stroke()
              ctx.draw(false, function() {
                wx.canvasToTempFilePath({
                  canvasId: 'myCanvas',
                  success: function(res) {
                    console.log(res.tempFilePath)
                    // wx.previewImage({
                    //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
                    // })
                    const animation = wx.createAnimation({
                      duration: 2000,
                      delay: 2000,
                      timingFunction: 'ease-in-out',
                    });
                    self.animation = animation;
                    animation.opacity(0.9).step({duration: 2000});
                    self.setData({
                      animationData: animation.export()
                    })
                    self.setData({
                      prurl: res.tempFilePath,
                      hidden: false
                    })
                  }
                })
              });
            } else {
              wx.showToast({
                title: '邀请卡绘制失败!'
              })
            }
          }, 2000);
        }
      });
    })
  },
  //保存海报图片到本地
  save: function() {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.prurl,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好的',
          confirmColor: '#333',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定');
              /* 该隐藏的隐藏 */
              that.setData({
                hidden: true
              })
            }
          }
        })
      }
    })
  },
  //取消
  cancel: function() {
    this.setData({
      hidden: true
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.getStorage({
      key: 'cartInfo',
      success: (res) => {
        this.getProductTotal(res.data)
      },
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})