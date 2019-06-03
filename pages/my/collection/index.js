const app = getApp();
import vdata from '../../../utils/virtual-data.js'

Page({

  data: {
    hotItemAdvertisement: [],   //爆品上新部分广告图片
  },
  onLoad: function () {
    var that = this;
    that.setData({
      hotItemAdvertisement: vdata.advertisement.hotItemAdvertisement
    });

  },
});