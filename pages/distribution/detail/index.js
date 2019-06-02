var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["订单列表", "提现明细", "线下人员"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function (option) {
    var that = this;
    that.initPage(option);
  },
  //初始化界面的一些设置
  initPage(option) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    if (option.status == "1") {
      that.getElementInfoByClass("weui-navbar__item", 1);
      that.setData({
        activeIndex: 1
      });
    } else if (option.status == "2") {
      that.getElementInfoByClass("weui-navbar__item", 2);
      that.setData({
        activeIndex: 2
      });
    } else if (option.status == "0") {
      that.getElementInfoByClass("weui-navbar__item", 0);
      that.setData({
        activeIndex: 0
      });
    }
  },
  //通过id获取一些对象属性值
  getElementInfoByClass(className, index) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('.' + className).boundingClientRect().exec(function (res) {
      that.setData({
        sliderOffset: index * res[0].width,
        activeIndex: index
      });
    });
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});