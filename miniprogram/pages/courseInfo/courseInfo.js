// pages/courseInfo/courseInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseCode:'',
    stuNameList:[],
    totalNum:0
  },
  toQRIndex() {
    wx.navigateTo({
      url: '/pages/qrcodeIndex/qrcodeIndex',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const {courseCode,courseName,_id,courseId} = options
    // console.log(options);
    this.setData({
      courseCode,
      courseName,
      _id,
      courseId
    })
    const res = await wx.cloud.callFunction({
      name:'getStuNameList',
      data:{
        semesterId:_id,
        courseId:+courseId
      }
    })
    // console.log(res.result);
    this.setData({
      stuNameList:res.result.list,
      totalNum:res.result.list.length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: '班级详情',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})