Page({
  data: {
    action : true,
    pickerVisible : false,
    showBottom : false,
    citys : ""
  },
  onLoad() {},
  addressPickerChange(event){
    this.setData({
      pickerVisible : false
    })
    if(event.type == "confirm"){
      var citys = event.citys;
      this.setData({
        citys
      })
    }
  },
  handleClick(){
      this.setData({
        pickerVisible : true
      })
  },
  // 收货地址
  onButtomBtnTap() {
    this.setData({
      showBottom: true,
    });
  },
  onPopupClose() {
    this.setData({
      showBottom: false,
    });
  }
});
