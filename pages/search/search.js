const request = require("/config/request");
import base from '/config/base'

Page({
  data: {
  },
  handleClickPush(){
    my.navigateBack()
  },
  handleClick(data){
    var value = data.detail.value;
      request.banner("/Shop/GetProductList","Name="+value).then(data=>{
        console.log(data);
      }) 
  },
  onLoad() {},
});
