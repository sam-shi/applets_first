Page({
  data: {
    ads: []
  },
  //ads: [{ 'id': 1, 'title': 'guanggao1' }, { 'id': 2, 'title': 'guanggao2'}]
  onLoad: function (options) {
    wx.showLoading({ //显示消息提示框  此处是提升用户体验的作用
      title: '数据加载中',
      icon: 'loading',
    });
    wx.request({
      url: 'http://yii2.test/ad/ad-list', //请求接口的url
      method: 'POST', //请求方式
      data: {},//请求参数
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      complete: res => {  //请求结束后隐藏 loading 提示框
        wx.hideLoading();
      },
      success: res => {
        if (res == null || res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '网络请求失败'
          })
        } else {
          this.setData({
            ads: res.data.data,
          })
        }
      }
    });
  }
})
