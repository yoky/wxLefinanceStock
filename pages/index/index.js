// var echarts = require('../../utils/echarts.js');

//获取应用实例
var app = getApp();
Page({
  data: {
  },
  onLoad: function () {
    var that=this;
    wx.request({
      url: 'http://www.lefinance.com/qmt/v1/stockData/stockMarket?caller=1001&type=CN',
      method:'GET',
      success:function(res){
        that.setData({
          market: res.data.data
        })
      }
    })
    // var mycharts=echarts.init();
    
  }
})
