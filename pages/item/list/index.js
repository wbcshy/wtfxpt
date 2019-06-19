const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: '',
    itemType: '', //商品分类具体内容
    itemArea: '', //选择区域
    itemRecommand: '', //推荐名称
    type: '', //表示选中的栏目 1 商品分类 2 区域分类 3 推荐分类
    typeArray: [], //选中后渲染的下拉框分类列表内容
    itemTypeArray: [], //分类内容列表
    itemAreaArray: [], //苏州区域列表
    itemRecommandArray: [], //推荐列表
    itemList: [], //商品列表信息,
    total: 0,    //商品列表总记录数
    page: 1,    //列表当前页
  },
  onLoad: function(option) {
    var self = this;
    const inputVal = "";
    console.log(option.inputVal);
    if (option.inputVal == undefined) {
      self.setData({
        inputVal: "" //设置输入框值
      });
    } else {
      self.setData({
        inputVal: option.inputVal //设置输入框值
      });
    }
    
    self.searchItemListByVal(self.data.itemType, self.data.inputVal, self.data.page, 1);
    self.init();
  },
  //列表下拉刷新操作
  onPullDownRefresh: function (e) {
    console.log(e);
    var self = this;
    var page = self.data.page;
    page += 1;
    self.setData({
      page: page
    });
    self.searchItemListByVal(self.data.itemType, self.data.inputVal, page, 1);
  },
  //页面初始化相关
  init() {
    this.initItemTypeDownList();
    this.initItemAreaDownList();
    this.initItemRecommandDownList();
  },
  //初始化商品类别下拉列表框
  initItemTypeDownList() {
    var self = this;
    var itemTypeArray = [{
      name: '全部分类',
      checked: true
    }];
    //商品分类选择
    app.postRequest('/itemGoods/itemCategoryList.do', {}).then(res => {
      console.log(res.data);
      const array = res.data;
      for (let i = 0; i < res.data.length; i++) {
        itemTypeArray.push(array[i]);
      }
      self.setData({
        itemTypeArray: itemTypeArray,
        itemType: itemTypeArray[0].name
      });
    });
  },
  //初始化区域下拉列表
  initItemAreaDownList() {
    var self = this;
    var itemAreaArray = [{
      name: '全城',
      checked: true
    }];
    self.setData({
      itemAreaArray: itemAreaArray,
      itemArea: itemAreaArray[0].name
    });
  },
  //初始化推荐  下拉列表
  initItemRecommandDownList() {
    var self = this;
    var itemRecommandArray = [{
      name: '默认推荐',
      checked: true
    }];
    self.setData({
      itemRecommandArray: itemRecommandArray,
      itemRecommand: itemRecommandArray[0].name
    });
  },
  //选择分类动态渲染数据
  selectType(e) {
    var self = this;
    const type = e.detail.data.type; //选中选项的索引值
    if (type == "1") { //点击选择商品分类一栏
      const itemTypeArray = self.data.itemTypeArray;
      self.setData({
        type: type,
        typeArray: itemTypeArray
      });
    }
    if (type == '2') { //选择区域分类一栏
      const itemAreaArray = self.data.itemAreaArray;
      self.setData({
        type: type,
        typeArray: itemAreaArray
      });
    }
    if (type == '3') { //选择推荐类别一栏
      const itemRecommandArray = self.data.itemRecommandArray;
      self.setData({
        type: type,
        typeArray: itemRecommandArray
      });
    }
  },
  //根据下拉框内容查询商品列表信息
  getItemList(e) {
    console.log(e);
    var self = this;
    const index = e.detail.data.index;
    switch (self.data.type) {
      case ("1"):
        self.data.itemTypeArray.forEach(itemType => {
          if (itemType.checked == true) {
            itemType.checked = !itemType.checked;
          }
        });
        self.data.itemTypeArray[index].checked = true;
        const category = self.data.itemTypeArray[index].name;
        self.setData({
          itemType: category
        });
        self.searchItemListByVal(category, self.data.inputVal, 1, 2);
        break;
      case ("2"):
        self.data.itemAreaArray.forEach(areaType => {
          if (areaType.checked == true) {
            areaType.checked = !areaType.checked;
          }
        });
        self.data.itemAreaArray[index].checked = true;
        self.setData({
          itemArea: self.data.itemAreaArray[index].name
        });
        break;
      case ("3"):
        self.data.itemRecommandArray.forEach(recommand => {
          if (recommand.checked == true) {
            recommand.checked = !recommand.checked;
          }
        });
        self.data.itemRecommandArray[index].checked = true;
        self.setData({
          itemRecommand: self.data.itemRecommandArray[index].name
        });
        break;
    }
  },

  //点击搜索栏位查询商品列表
  searchItemList(e) {
    var self = this;
    var inputVal = e.detail.data;
    self.setData({
      inputVal: inputVal
    });
    self.searchItemListByVal(self.data.itemType, self.data.inputVal, 1, 2);
  },
  //通过名称查询商品列表
  searchItemListByVal(category, inputVal, page, flag) {
    var self = this;
    app.postRequest("/itemGoods/categoryName/list.do?page=" + page + "&limit=" + 20, {
      category: category,
      inputVal: inputVal
    }).then(res => {
      console.log(res);
      if (res.statusCode == 200) { //请求接口成功
        const result = res.data;
        var itemList = self.data.itemList;
        var resultList = [];
        if(flag == 1) { //表示下拉屏幕加载新的列表
          //选遍历商品信息表
          for (let i = 0; i < itemList.length; i++) {
            resultList.push(itemList[i]);
          }
          for (let i = 0; i < result.data.length; i++) {
            resultList.push(result.data[i]);
          }
        }
        if(flag == 2) {   //表示点击事件出发查询操作
          resultList = result.data
        }
        self.setData({
          total: result.count,
          itemList: resultList
        });
      }
    });
  },
  

});