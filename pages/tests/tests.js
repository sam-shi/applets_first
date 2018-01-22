//tests.js
const util = require('../../utils/util.js')

Page({
  data: {
    tests: []
  },
  onLoad: function () {
    this.setData({
      tests: (wx.getStorageSync('test') || []).map(test => {
        return util.formatTime(new Date(test))
      })
    })
  }
})
