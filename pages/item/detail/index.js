const link = require('../../../utils/common.js');
import vdata from '../../../utils/virtual-data.js'
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    itemDetail: {},
    skuInfo:{},   //商品规格参数相关信息
    shopInfo: {},   //商家店铺相关信息
    hidden: true,
    componentDatas: {
      selectedName: '已选',
      selectedNums: 1
    },
    recommandItenList: [],   //推荐列表
    buttonTitle: '',   //规格弹窗中按钮名称
    isShowPopup: false,
    isShowSelected: false,
    badgeCount: 0,
    itemSpecification:{},   //商品对应规格
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var self = this;
    const itemGoodsId = option.itemGoodsId;   //商品编号
    self.init(itemGoodsId);
    
   

    this.setData({
      recommandItenList: vdata.advertisement.hotItemAdvertisement

    })
    

  },
  //初始化商品详情页面
  init(itemGoodsId) {
    var self = this;
    self.initItemDetail(itemGoodsId);
    self.queryCartNum();
  },
  //初始化商品详情接口数据
  initItemDetail(itemGoodsId) {
    var self = this;
    var data = {
      goodsId: itemGoodsId
    };
    app.postRequest("/itemGoods/detail.do", data).then(res => {
      if(res.statusCode == 200) {
        console.log(res);
        var result = res.data.data;
        var resultData = {
          good: result.good,   //商品详情
          skuInfo: {   //参数列表数据
            imgUrl: result.specification[0].picUrl,   //商品规格图片
            picUrl: result.good.picUrl[0],    //商品图片
            price: result.specification[0].price,   //商品价格
            specification: result.specification,   //商品参数列表
            specificationDetail: result.specificationDetail,   //商品参数列表每个信息详情属性值
          },
          shop: result.shop    //商铺详情
        };
        self.setData({
          itemDetail: resultData.good,
          skuInfo: resultData.skuInfo,
          shopInfo: resultData.shop,
          singlePrice: result.specification[0].price,
          specificationId: result.specification[0].id
        });
      }

    });
  },
  //点击购物车或者立刻购买触发事件
  showSelected(e) {
    console.log(e);
    this.setData({
      isShowSelected: true,
      buttonTitle: e.currentTarget.dataset.title
    })
  },
  //查询该商品在此用户购物车中添加的数量
  queryCartNum() {
    //查询购物车中商品列表接口
    app.postRequest('/cart/list.do',{}).then(res => {
      var self = this;
      console.log(res);
      if(res.statusCode == 200) {
        self.setData({
          badgeCount: res.data.data[0].itemGoodsDetails.length  //商品在此用户购物车上的类目数目
        });
      }
    });
  },
  //获取个人购物车栏添加商品数量  
  getCartNums({
    detail
  }) {
    this.data.componentDatas.selectedNums = detail;
    this.setData({
      componentDatas: this.data.componentDatas
    })
  },
  
  getProductTotal(arrLength) {
    this.setData({
      badgeCount: arrLength.length
    })
  },
  gotoCart() {
    wx.switchTab({
      url: '/pages/cart/index',
    });
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