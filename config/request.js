import base from './base'


// 主页banner图， 广告位,分类1
function banner(url,site){
  site ? url = base.apiURL + url +'?token='+base.token + "&" + site : url = base.apiURL + url +'?token='+base.token;
  return new Promise(resolve=>{
    my.request({
      url,
      method: 'POST',
      success:function(res){
        res = res.data;
        if(res.code === 0){
          resolve(res.data);
        }
      },
      file:function(res){
        console.log(res)
      }
    })

  })
}


module.exports = {
  banner : banner
}