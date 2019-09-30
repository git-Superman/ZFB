Page({
  data: {
    tabs: [
      {
        title: '商品详情'
      },
      {
        title: '商品规格/配件'
      },
      { title: '租赁须知' }
    ],
    activeTab: 0,
    showBottom: false,
    str : false
  },
  handleClick(){
    this.setData({
      str : true
    })
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
  // 优惠券
  onButtomBtnTap() {
    this.setData({
      showBottom: true,
    });
  },
  onPopupClose() {
    this.setData({
      showBottom: false,
    });
  },
  onLoad() {},
});
