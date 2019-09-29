Page({
  data : {
    icon : [
        {
          url : '/images/icon/main-sjfl.png',
          text : '手机'
        },
        {
          url : '/images/icon/main-dnfl.png',
          text : '电脑'
        },
        {
          url : '/images/icon/main-smfl.png',
          text : '数码'
        },
        {
          url : '/images/icon/main-myfl.png',
          text : '母婴'
        },
      ]
  },
  handleClick(){
    my.navigateTo({ url: '../search/search' })
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
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
