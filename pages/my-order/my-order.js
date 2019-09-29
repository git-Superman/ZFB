Page({
  data: {
    list : ['全部订单','待审核','待发货','租用中','已逾期','已完结'],
    inx : 0,
    showBottom : false,
    showTo : false
  },
  handleInx(event){
    var inx = event.currentTarget.dataset.id;
    this.setData({
      inx
    });
  },
  // 租用中
  onButtomBtnTap() {
    this.setData({
      showBottom: true,
    });
  },
  onPopupClose() {
    this.setData({
      showBottom: false,
      showTo : false
    });
  },
  onToTap(){
    this.setData({
      showTo : true
    });
  },
  onLoad() {},
});
