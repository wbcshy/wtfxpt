import regeneratorRuntime from '../../../libs/regenerator-runtime/runtime-module'
import vdata from '../../../utils/virtual-data.js'

const Dialog = require('../../../ui/dialog/dialog');
Page({
  data: {
    id: null,
    orderInfo: null,
    orderLog: null,
  },
  async onLoad() {
    this.setData({
      orderInfo: vdata.orderInfo
    });
  },
  onRefund(e) {
    
  },
  onRefundDetail(e) {
    
  },
  async onShow() {
    
  },
  async init() {
    
  },
  onGoodsDetail(e) {
    
  },
  async onCancel(e) {
    
  },
  onEvaluate(e) {
    
  },
  async onReceive(e) {
    
  },
  async onPay() {
    
  },
  updateListRow() {
    
  },
  async onLogistics(e) {
  }
})