Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: '一级分类', anchor: 'a'},
      { title: '二级分类', anchor: 'b'},
      { title: '三级分类', anchor: 'c' },
      { title: '四级分类', anchor: 'd' },
      { title: '五级分类', anchor: 'e' },
      { title: '六级分类', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  handleClick(){
    my.navigateTo({ url: '../search/search' })
  },
  onChange(index) {
    console.log('onChange', index);
    this.setData({
      activeTab: index,
    });
  },
  onChanges(){
    console.log(`12`)
  },
  handleClickPush(){
    my.navigateTo({ url: '../classfiyDetail/classfiyDetail' })
  },
  onLoad() {},
});
