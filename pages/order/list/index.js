import regeneratorRuntime from '../../../libs/regenerator-runtime/runtime-module'
import vdata from '../../../utils/virtual-data.js'
const Dialog = require('../../../ui/dialog/dialog');
Page({
  data: {
    page: 1,
    rows: 10,
    noMore: false,
    orderStateTabs: [   //订单栏内容
      {
        id: 'all',
        title: '全部'
      },
      {
        id: 'state_new',
        title: '待付款'
      },
      {
        id: 'state_pay',
        title: '待发货'
      },
      {
        id: 'state_send',
        title: '待收货'
      },
      {
        id: 'state_success',
        title: '已完成'
      }
    ],
    list: [],
    state_type: 'all',   //表示选中状态字段
  },
  async onLoad({ state_type = 'all' }) {
    this.setData({
      state_type
    })
  },
  onShow() {
    this.setData({
      page: 1
    })
    this.getList()
  },
  async getList() {
    this.setData({
      orderList: vdata.orderList,
      goodsList: vdata.goodsList
    });
  },
  async onReachBottom() {
    
  },
  goDetail(e) {
    
  },
  onTabChange(e) {
    this.setData({
      state_type: e.detail,
      page: 1,
      list: []
    })
    this.getList()
  },
  async onCancel(e) {
    
  },
  onEvaluate(e) {
    
  },
  async onReceive(e) {
    
  },
  async onPay(e) {
    
  },
  // 更新某条
  async updateListRow(id) {
    
  },
  async onLogistics(e) {
    
  }
})