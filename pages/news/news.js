// var echarts = require('../../utils/echarts.js');

//获取应用实例
var app = getApp();
Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 500,
    circular: true,
    dotsClass: ['on']
  },
  onLoad: function () {
    var that = this;
    that.getFocusNews().then(that.getNewsList());
  },
  swiperChange: function (event) {
    var dotsClass = new Array(this.data.focusNews.length - 1);
    dotsClass[event.detail.current] = 'on';
    this.setData({
      dotsClass: dotsClass
    });
  },
  getFocusNews: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'http://www.lefinance.com/qmt/v1/h5/news/focus',
        method: 'GET',
        success: function (res) {
          that.setData({
            focusNews: res.data.data
          })
        }
      })
    })
  },
  getNewsList: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'http://www.lefinance.com/qmt/v1/h5/news/hot?page=0',
        method: 'GET',
        success: function (res) {
          that.setData({
            news: res.data.data.entries
          })
        }
      })
    })
  }
})
