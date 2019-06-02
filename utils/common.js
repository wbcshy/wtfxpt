var Promise = require('./bluebird.min.js')
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
  var result = new Promise(function(resolve, reject) {
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
      var result = getSingleElementHeightByClass(element).then(function(element) {
        sum += element;
        console.log(sum);
        if (element) {
          num += 1
        }
        if (num == classNameArray.length) {
          resolve(sum);
        }
      });
    }
  });
}

const ajax = ({
  url,
  method,
  data,
  header
}, success, fail) => {
  wx.request({
    url,
    method: method || 'GET',
    data: data || {},
    header: header || {
      "Contant-Type": "application/json"
    },
    success,
    fail
  })
}

const showLoading = () => {
  wx.showLoading({
    title: '加载中...',
  })
}

const hideLoading = () => {
  setTimeout(_ => {
    wx.hideLoading()
  }, 800)
}

/**
 * 
 */
function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width; //图片原始宽
  var originalHeight = e.detail.height; //图片原始高
  var originalScale = (originalHeight / originalWidth); //图片高宽比
  console.log('originalWidth: ' + originalWidth)
  console.log('originalHeight: ' + originalHeight)
  //获取屏幕宽高
  wx.getSystemInfo({
    success: function(res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = (windowHeight / windowWidth); //屏幕高宽比
      console.log('windowWidth: ' + windowWidth)
      console.log('windowHeight: ' + windowHeight)
      if (originalScale < windowscale) { //图片高宽比小于屏幕高宽比
        //图片缩放后的宽为屏幕宽
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
      } else { //图片高宽比大于屏幕高宽比
        //图片缩放后的高为屏幕高
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
      }

    }
  })
  console.log('缩放后的宽: ' + imageSize.imageWidth)
  console.log('缩放后的高: ' + imageSize.imageHeight)
  return imageSize;
}





/**
 * 导出定义函数
 */
module.exports = {
  regular: regular,
  isChinese: isChinese,
  trim: trim,
  getSingleElementHeightByClass: getSingleElementHeightByClass,
  getElementsHeightByClasses: getElementsHeightByClasses,
  ajax,
  showLoading,
  hideLoading,
  imageUtil: imageUtil,
  promisify: api => {
    return (options, ...params) => {
      return new Promise((resolve, reject) => {
        const extras = {
          success: resolve,
          fail: reject
        }
        api({ ...options,
          ...extras
        }, ...params)
      })
    }
  }
}