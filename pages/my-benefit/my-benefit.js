Page({
  data: {
    list : ['未使用','已使用','已过期'],
    inx : 0,
  },
  handleInx(event){
    var inx = event.currentTarget.dataset.id;
    this.setData({
      inx
    });
  },
  onLoad() {},
});
