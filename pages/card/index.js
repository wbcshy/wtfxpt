// pages/cart/cart.js
const app = getApp();
import vdata from '../../utils/virtual-data.js'
import {config} from '../../api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageHost: config.imageUrl,
    cartList: [],
    totalMoney: 0,
    totalCount: 0,
    selectAll: false,
    isSaveMode: false,
    delIndex: [], //从购物车删除商品的数组
    batchIds: [] //选中进行批量操作数的数组id值
  },

  /**
   * 页面展示
   */
  onShow: function(option) {
    var self = this;
    self.getList();
  },
  /**
   * 页面加载
   */
  onLoad(option) {

  },
  //初始化购物车列表
  getList() {
    //查询该用户的购物车列表
    app.postRequest('/cart/list.do',{}).then(res => {
      var self = this;
      if(res.statusCode == 200) {
        var result = res.data.data;
        var cartList = result[0].itemGoodsDetails;  
        var money = 0;
        console.log(cartList);
        for (let i = 0; i < cartList.length; i ++) {
          if (cartList[i].checked == true) {
            money += cartList[i].price * cartList[i].num; 
          }      
        }
        self.setData({
          cartList: cartList,
          totalMoney: money.toFixed(2)
        });
      }
    }); 
  },
  // 单选
  checkboxChange: function(e) {
    console.log(e);
    var that = this;
    var totalMoney = 0;
    var cartList = that.data.cartList;
    var indexArr = e.detail.value;
    for (let i = 0; i < indexArr.length; i++) {
      let index = indexArr[i];
      cartList[index].checked = true;
      totalMoney += Number(cartList[index].price) * Number(cartList[index].num);
    }
    console.log(totalMoney);
    this.setData({
      batchIds: e.detail.value, //单个选中的值
      totalMoney: totalMoney.toFixed(2),
      selectAll: false
    });
  },
  //全选
  selectall(e) {
    var that = this;
    var arr = []; //存放选中id的数组
    var batchSpecificationId = [];
    var cartList = that.data.cartList;
    console.log(cartList);
    let totalMoney = 0 // 合计初始化为0
    let totalCount = 0 // 结算个数初始化为0
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].checked = (!that.data.selectAll);
      if (cartList[i].checked == true) {   //表示选中
        // 全选获取选中的值
        arr = arr.concat(i);
        totalMoney += Number(cartList[i].price) * Number(cartList[i].num);
        batchSpecificationId.push(cartList[i].specificationId);
        console.log(batchSpecificationId);
      }
    }
    console.log(arr);
    that.setData({
      cartList: cartList,
      selectAll: (!that.data.selectAll),
      batchIds: arr,
      totalMoney: totalMoney.toFixed(2)
    })

  },
  //增加购物车中的商品数量
  addNums({
    currentTarget: {
      dataset: {
        index
      }
    }
  }) {

    let totalMoney = Number(this.data.totalMoney),
      cartList = this.data.cartList;
    console.log(cartList[index].checked);
    if (cartList[index].checked) {
      totalMoney += Number(cartList[index].price);
    }
    this.setData({
      cartList,
      totalMoney: totalMoney.toFixed(2)
    })
  },
  //减少购物车中商品的数量
  subNums({
    currentTarget: {
      dataset: {
        index
      }
    }
  }) {
    let totalMoney = Number(this.data.totalMoney),
      cartList = this.data.cartList;
    if (cartList[index].checked) {
      totalMoney -= Number(cartList[index].price);
    }

    this.setData({
      cartList,
      totalMoney: totalMoney.toFixed(2)
    })

  },
  //获取购物车数量
  getCartCount({
    currentTarget: {
      dataset: {
        index
      }
    },
    detail
  }) {
    this.data.cartList[index].num = detail;
    this.setData({
      cartList: this.data.cartList
    })
  },
  //编辑商品
  editItem() {
    var that = this;
    const cartList = that.data.cartList;
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].checked = false;
    }
    this.setData({
      cartList: cartList,
      selectAll: false,
      totalMoney: '0.00',
      isSaveMode: true
    });
  },
  //保存商品
  saveItem() {
    var that = this;
    console.log(1);
    const cartList = that.data.cartList;
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].checked = false;
    }
    that.setData({
      cartList: cartList,
      selectAll: false,
      totalMoney: '0.00',
      isSaveMode: false
    });
  },
  //删除商品
  delItem() {
    var that = this;
    let cartList = that.data.cartList;
    console.log(that.data.batchIds);
    that.data.batchIds.forEach(item => {
      cartList.splice(item,1);
    });

    console.log(cartList);
    this.setData({
      cartList: cartList
    }); 
  },
  //跳转到订单页购买商品
  buynow() {
    wx.navigateTo({
      url: '/pages/order/detail/index',
    })
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    wx.setStorage({
      key: 'cartInfo',
      data: this.data.cartList,
    })

    this.setData({
      totalMoney: '0.00',
      totalCount: 0,
      selectAll: false
    })
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