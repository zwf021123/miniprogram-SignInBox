// pages/editCourse/editCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastForWeek:'',
    whichDay:'',
    section:'',
    showDayPopup:false,
    days:['星期一','星期二','星期三','星期四','星期五','星期六','星期天']
  },
  onCancelDay() {
    this.setData({ showDayPopup: false });
  },
  onConfirmDay(event){
    const { picker, value, index } = event.detail;
    this.setData({ showDayPopup: false,whichDay:value });
  },
  // onDayChange(event) {
  //   const { picker, value, index } = event.detail;
  //   console.log(`当前值：${value}, 当前索引：${index}`);
  // },
  toShowDayPopup() {
    this.setData({ showDayPopup: true });
  },
  onClose() {
    this.setData({ showDayPopup: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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