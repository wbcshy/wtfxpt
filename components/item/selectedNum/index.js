const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是否展示
    isShowSelected: {
      type: Boolean,
      default: false
    },
    partData: Object,
    buttonTitle: {
      type: String,
      value: ''
    },
    singlePrice: {
      type: String,
      value: ''
    },
    specificationId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    detail: 1, //默认选择的商品数量
    skuInfo: {
      goodsId: '',
      specifications: []
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showSelectedPopup({
      target: {
        dataset: {
          current
        }
      }
    }) {
      if (current == 'current') {
        this.setData({
          isShowSelected: false
        })
      }
    },
    //点击选项选择商品规格参数并保存
    getItemSku(e) {
      var self = this;
      var itemSku = e.currentTarget.dataset.itemsku;
      var skuInfo = self.data.skuInfo;
      var itemGoosId = itemSku.goodsId;
      var result = self.data.partData.specificationDetail;
      console.log(result);
      console.log(skuInfo);
      if (skuInfo.specifications.length == 0) {
        //初始化默认skuInfo为每个规格参数的第一列值
        var specificationsArr = []
        for (let i = 0; i < result.length; i++) {
          var specification = {
            specification: result[i].name,
            value: result[i].valueList[0].value
          }
          specificationsArr.push(specification);
        }
        self.setData({
          skuInfo: {
            goodsId: self.data.partData.specificationDetail[0].valueList[0].goodsId,
            specifications: specificationsArr
          }
        });

        //剔除重复元素
        var specifications = self.data.skuInfo.specifications;
        self.replaceSameElement(specifications, itemSku, itemGoosId, result);
        console.log(self.data.skuInfo);
      } else {
        var specifications = skuInfo.specifications;
        self.replaceSameElement(specifications, itemSku, itemGoosId, result);
        console.log(self.data.skuInfo);
      }
      self.queryItemSpecification(self.data.skuInfo);

    },
    //替换商品规格参数中数组元素
    replaceSameElement(specifications, itemSku, itemGoosId, result) {
      var self = this;
      var flag = true;
      for (let i = 0; i < specifications.length; i++) {
        if (itemSku.specification == specifications[i].specification) {
          flag = false;
        }
        //表述循环到最后页面也没有重复元素 
        if (i == specifications.length - 1) {
          //直接在当前数组中添加新元素
          if (flag == true) {
            specifications.push({
              specification: itemSku.specification,
              value: itemSku.value
            });
          }
        }
        //表示数组中没有相同元素时，移除重复元素，并添加新元素
        if (flag == false) {
          specifications.splice(i, 1, {
            specification: itemSku.specification,
            value: itemSku.value
          });
          break; //结束当前循环
        }
      }
      self.setData({
        skuInfo: {
          goodsId: itemGoosId,
          specifications: specifications
        }
      });
    },
    //加入购物车或者购买商品
    operateItem(option) {
      var self = this;
      var name = option.currentTarget.dataset.name;
      var result = self.data.partData.specificationDetail;
      //加入购物车或者购买前规格参数如果为空,skuInfo默认每个规格参数的第一项
      console.log(self.data.skuInfo);
      if (self.data.skuInfo == null) {
        var specifications = []
        for (let i = 0; i < result.length; i++) {
          var specification = {
            specification: result[i].name,
            value: result[i].valueList[0].value
          }
          specifications.push(specification);
        }
        self.setData({
          skuInfo: {
            goodsId: self.data.partData.specificationDetail[0].valueList[0].goodsId,
            specifications: specifications
          }
        });
      }
      //添加到购物车中的数据
      var cardData = {
        specificationId: self.data.specificationId,   //商品规格id
        shareUserId: app.globalData.userId,   //用户id
        taskId: '',   //任务id  对应活动商品的分佣
        num: self.data.detail //加入购物车的商品数量
      }
      console.log(cardData.num);
      //加入购物车
      if (name == "加入购物车") {
        self.addCard(cardData);
      }
      if (name == "立即购买") {

      }
      //关闭规格参数弹窗
      this.setData({
        isShowSelected: false,
      })
    },
    //查询商品规格详情参数相关信息
    queryItemSpecification(itemData) {
      var self = this;
      var itemGoodsId = itemData.goodsId;
      var specifications = "";
      console.log(itemData.specifications.length);
      for (var i = 0; i < itemData.specifications.length; i++) {
        console.log(i);
        if (i == itemData.specifications.length - 1) {
          specifications += itemData.specifications[i].value;
          break;
        }
        specifications += itemData.specifications[i].value + ",";
      }
      //向接口传递的数据
      var data = {
        goodsId: itemGoodsId,
        specificatitons: specifications
      }
      //根据具体商品规格参数内容查询商品规格参数对应的商品信息
      app.postRequest("/itemGoods/query/specification.do", data).then(res => {
        if (res.statusCode == 200) {
          var result = res.data;
          console.log(result);
          var price = result.price * self.data.detail;
          console.log(price);
          var data = {
            imgUrl: result.picUrl, //商品规格图片
            picUrl: self.data.partData.picUrl, //商品图片
            price: price, //商品价格
            specification: self.data.partData.specification, //商品参数列表
            specificationDetail: self.data.partData.specificationDetail, //商品参数列表每个信息详情属性值
          }
          self.setData({
            partData: data,
            detail: self.data.detail,
            singlePrice: result.price, //对应不同规格商品的单价
            specificationId: result.id    //规格id
          });
        }
      });
    },
    //选择商品数量
    getCartVal({
      detail
    }) {
      this.data.partData.count = detail;
      var self = this;
      var price = self.data.singlePrice * detail;
      var data = {
        imgUrl: self.data.partData.picUrl, //商品规格图片
        picUrl: self.data.partData.picUrl, //商品图片
        price: price, //商品价格
        specification: self.data.partData.specification, //商品参数列表
        specificationDetail: self.data.partData.specificationDetail, //商品参数列表每个信息详情属性值
      }
      this.setData({
        partData: data,
        detail: detail
      });
      this.triggerEvent('getCartNum', detail)
    },
    //加入购物车
    addCard(cardData) {
      var self = this;
      var data = {
        specificationId: cardData.specificationId,   //商品规格id
        shareUserId: cardData.shareUserId,   //用户id
        taskId: cardData.taskId,   //任务id
        num: cardData.num  //购物车的数量
      }
      console.log(data);
      app.postRequest('/cart/addItem.do',data).then(res => {
        console.log(res);
        if(res.statusCode == 200) {
          wx.showToast({
            title: '加入购物车成功',
            icon: 'success'
          })
        }
      });
      self.triggerEvent("initCartItemNum");   //更新购物车中商品数目
    },
    //立即购买
    buyItem(itemData) {

    }
  }
})