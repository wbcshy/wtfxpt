//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/merchant/control/index",
      "iconPath": "/themes/default/merchant/control.png",
      "selectedIconPath": "/themes/default/merchant/control.png",
      "text": "工作台"
    },
    {
      "current": 0,
      "pagePath": "/pages/merchant/count/index",
      "iconPath": "/themes/default/merchant/data-count.png",
      "selectedIconPath": "/themes/default/merchant/data-count.png",
      "text": "数据统计"
    },
    {
      "current": 0,
      "pagePath": "/pages/merchant/my/index",
      "iconPath": "/themes/default/merchant/my.png",
      "selectedIconPath": "/themes/default/merchant/my.png",
      "text": "我的"
    }
  ]
}

//tabbar 主入口

function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath'] //换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({
    bindData
  });
}



module.exports = {
  tabbar: tabbarmain
}