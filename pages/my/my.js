Page({
  data: {},
  handleClickPush(event){
    var e = Number(event.currentTarget.dataset.id);
    switch(e){
      case 0:
        my.navigateTo({url:'../my-order/my-order'});
      break;
      case 1:
        my.navigateTo({url:'../my-benefit/my-benefit'});
      break;
      case 2:
        my.navigateTo({url:'../my-issue/my-issue'});
      break;
      case 3:
        // my.navigateTo({url:'../my-toke/my-toke'});
      break;
      case 4:
        my.navigateTo({url:'../my-toke/my-toke'});
      break;
      default:
      break;
    }
  },
  onLoad() {},
});
