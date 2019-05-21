const link = require('../../utils/common.js'),
  app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [], // 列表数据
    noData: false,
    pageNum: 1,
    pageSize: 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function({name}) {

    // 设置页面的名称
    wx.setNavigationBarTitle({
      title: name,
    })

    // 页面初始化调用请求方法
    this.getDataList();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getDataList(); // 重新向后台请求数据

    // 重置页数
    this.setData({
      pageNum: 1
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.stopPullDownRefresh(); // 停止下拉刷新状态
    wx.showNavigationBarLoading(); // 显示导航栏的loading

    // this.setData({
    //   pageNum: ++this.data.pageNum   // 让请求的页码数加加  加加前置先是先加加在执行
    // })

    // link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/productionsList/${this.data.pageNum}/${this.data.pageSize}`},res => {
    //   if(res.data.length !== 0) {     // 判断数组不等于0 给列表的数组添加
    //     res.data.forEach(item => {
    //       this.data.productList.push(item); 
    //     })
    //     this.setData({
    //       productList: this.data.productList   // 在设置给data
    //     })
    //   }else {              // 如果等于0了那么下面的无数据显示
    //     this.setData({
    //       noData:true     
    //     })
    //   }
    //   setTimeout(_ => {     // 隐藏导航栏的loading
    //     wx.hideNavigationBarLoading();
    //   },600)
    // })

  },

  // 请求列表数据
  getDataList() {

    var productList = [{
        "id": "4a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "../../images/classify/miphone.png",
        "title": "黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机",
        "price": "3388.00",
        "comment": "6239",
        "rate": "99%",
        "soldnum": 123
      },
      {
        "id": "5a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "../../images/classify/huawei.png",
        "title": "HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待",
        "price": "4499.00",
        "comment": "27万",
        "rate": "99%",
        "soldnum": 123
      },
      {
        "id": "3a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "../../images/classify/phone.png",
        "title": "荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待",
        "price": "1499.00",
        "comment": "3万",
        "rate": "99%",
        "soldnum": 123
        
      },
      {
        "id": "4a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "../../images/classify/miphone.png",
        "title": "黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机",
        "price": "3388.00",
        "comment": "6239",
        "rate": "99%",
        "soldnum": 123
      },
      {
        "id": "5a4c8b8e4d8c22a97a94b46f58c1f3b9",
        "cover": "../../images/classify/huawei.png",
        "title": "HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待",
        "price": "4499.00",
        "comment": "27万",
        "rate": "99%",
        "soldnum": 123
      }
    ];

    this.setData({
      productList: productList
    });

    // // 显示loading
    // link.showLoading()

    // // 获取列表数据
    // link.ajax({ url: `${app.globalData.defaultURL}/api/profiles/productionsList` }, res => {
    //   this.setData({
    //     productList: res.data
    //   })

    //   // 隐藏loading
    //   link.hideLoading();

    //   // 关闭下拉刷新
    //   setTimeout(_ =>{
    //     wx.stopPullDownRefresh();
    //   },600)
    // })
  },

  // 去往商品详情页
  gotoProductDetail({
    currentTarget: {
      dataset: {
        index: item
      }
    }
  }) {
    wx.navigateTo({
      url: `/pages/productdetail/productdetail?id=${this.data.productList[item].id}`
    })
  }
})