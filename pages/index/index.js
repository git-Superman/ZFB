const request = require("/config/request");
import base from '/config/base'

Page({
  data : {
    icon : [],
      banner : [],
      advertising : []
  },
  handleClick(){
    my.navigateTo({ url: '../search/search' })
  },
  onLoad(query) {
    // 页面加载
    // 轮播图
  request.banner("/Banner/GetList").then(data=>{
    var banner = data.map(item=>item.contents = base.imgURL + item.contents)
    this.setData({ banner })
  })
  // 广告
  request.banner("/Banner/GetAdvertList").then(data=>{
    var advertising = data.map(item=>item.contents = base.imgURL + item.contents)
    this.setData({ advertising });
  })
  // 分类
  request.banner("/Shop/GetCategoryFirst").then(data=>{
    var icon = data;
    icon.forEach(item=>{
      item.logo = base.imgURL + item.logo;
    })
    console.log(icon);
    this.setData({
      icon
    });
    var id = "id="+icon[0].id;
    request.banner("/Shop/GetCategorySecond",id).then(data=>{
      console.log(data);
    })

  })

  
  },
  handleClickg(event){
    var id = event.currentTarget.dataset.id;
    console.log(id);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
