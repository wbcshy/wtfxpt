/**
 * 正则判断
 */
function regular(str, reg) {
  if (reg.test(str))
    return true;
  return false;
}

/**
 * 是否为中文
 */
function isChinese(str) {
  var reg = /^[\u0391-\uFFE5]+$/;
  return Regular(str, reg);
}
/**
 * 去左右空格
 */
function trim(s) {
  return s.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 通过class名称获取该元素组件的高度数据
 */
function getSingleElementHeightByClass(className) {
  var result = new Promise(function (resolve, reject) {
    var query = wx.createSelectorQuery();
    query.select("." + className).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec((res) => {
      var listHeight = res[0].height; // 获取list高度
      resolve(listHeight);
    });
  });
  return result;
}


/**
 * 通过className数组获取组件块总高度
 */
function getElementsHeightByClasses(classNameArray) {
  return new Promise(function(resolve, reject) {
    for (var index in classNameArray) {
      var element = classNameArray[index];
      var sum = 0;
      var num = 0;
      var result = getSingleElementHeightByClass(element).then(function (element) {
        sum += element;
        console.log(sum);
        if(element) {
          num += 1
        }
        if (num == classNameArray.length) {
          resolve(sum);
        }   
      });
    }
  });
}



/**
 * 导出定义函数
 */
module.exports = {
  regular: regular,
  isChinese: isChinese,
  trim: trim,
  getSingleElementHeightByClass: getSingleElementHeightByClass,
  getElementsHeightByClasses: getElementsHeightByClasses
}