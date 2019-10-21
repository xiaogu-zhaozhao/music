<template>
  <div class="main" id="main">
    <div class="head">
      <div class="head1">
        <h1>假の音乐</h1>
        <ul>
          <li><a href="">发现音乐</a></li>
          <li><a href="">下载客户端</a></li>
          <li><a href="">音乐现场</a></li>
          <li><a href="">VIP会员</a></li>
          <li><a href="">酷我耳机</a></li>
          <li><a href="">更多</a></li>
        </ul>
        <audio src="" autoplay="autoplay" controls="controls" id="audio" loop="loop"></audio>
      </div>
    </div>
    <div class="rl">
      <ul>
        <li><a href="../">推荐</a></li>
        <li><a href="../bd">排行榜</a></li>
        <li><a href="../rg">歌单</a></li>
        <li><a href="../yc">主播电台</a></li>
        <li><a href="">歌手</a></li>
        <li><a href="">新歌上架</a></li>
      </ul>
    </div>
    <div class="lb">
      <input type="text" id="song" placeholder="歌词搜索">
      <input type="button" value="搜索" id="btn">
    </div>
    <table cellspacing="0" cellpadding="0" border="1" id="ta" >
      <tr>
        <td>歌曲</td>
        <td>歌手</td>
      </tr>
    </table>
    <div class="geci" id="gc"></div>
  </div>
</template>

<script>
  $(function(){
    $('#btn').click(function(){
      $('#table tr:not(:first)').empty(); //清空不是第一个！
      var songsUrl = $('#song').val();
      songsUrl = 'http://www.young1024.com:666/search?keywords='+songsUrl;
      // document.write(songsUrl)
      $.ajax({
        type:"get",
        url: songsUrl,
        dataType: "json",
        success:function(data){
          var songs = data['result']['songs'];
          var songval = Array();
          // $('#main').append(img)
          $.each(songs,function(keys,values){
            songval = values;
            var songName = '<tr><td style="background: #fff8e6;" ><span name="'+songval['id']+'">'+songval['name']+'</span></td><td style="background: #fff8e6;" >'+songval['ar']['0']['name']+'</td></tr>';
            $('#ta').append(songName)
          })
          // $.ajax({
          //   type:"get",
          //   url:songci,
          //   datatype:"json",
          //   success:function(data){
          //     var songimg = data['al']['picUrl']; //图片
          //     $('#main').append(songimg)
          //   }
          // })
          $('span').click(function(){
            $('#gc').empty();
            var songId = $(this).attr('name');
            var songurl='https://music.163.com/song/media/outer/url?id='+songId;
            // document.write(songurl);
            $('#audio').attr('src',songurl);
            var songci='http://www.young1024.com:666/lyric?id='+songId;
            $.ajax({
              type:"get",
              url:songci,
              datatype:"json",
              success:function(data){
                var text = data['lrc']['lyric']; //获取歌词

                //时间和歌词分开222222222222222
                var textArr = text.split("[");//split() 方法用于把一个字符串分割成字符串数组。
                var html = "";
                for(var i=1;i<textArr.length;i++){
                  var timeAndgc = textArr[i].split("]");

                  var time = timeAndgc[0]; //获取时间

                  var gc = timeAndgc[1]; //获取歌词

                  //分割出时间
                  var s = time.split(".") //按照.分割出 分钟：秒，  毫秒
                  var hs = s[1];  //分割出的毫秒 没用
                  var f = s[0].split(":")//按照：分割出 分钟，秒
                  var _ms = f[0]*60+f[1]*1;//把分钟全部换成秒

                  html=html+"<p id="+_ms+">"+gc+"</p>";

                }
                //监听播放时间并且让歌词跟着时间显示33333333333
                $('#gc').append(html);
                $('p').eq(0).show().siblings().hide();
                $("#audio")[0].addEventListener("timeupdate",function(){ //addeventlistenter 监听事件
                  var timer = this.currentTime;//获得播放的时间的秒数
                  var s = parseInt(timer);
                  //开始让歌词跟着播放的进度变颜色
                  for(var i=0;i<s;i++){
                    $("#"+i).stop().slideDown(300).siblings().hide()
                  }
                });


              }
            })
            //歌词部分结束


          })
        }
      })
    });




  });

  export default {
    name: "ss"
  }
</script>

<style scoped>
  *{
    padding:0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img{
    vertical-align: top;
  }
  .main{
    width: 100%;
    height: 100%;
    background-size: 100%;
  }
  .head{
    width: 100%;
    height: 55px;
    background: pink;
  }
  .head1{
    width: 1000px;
    height: 55px;
    margin: auto;
  }
  .head1 h1{
    float: left;
    font-size: 20px;
    line-height: 55px;
  }
  .head1 ul{
    float: left;
  }
  .head1 ul li{
    float: left;
    margin-left: 30px;
    height: 55px;
    line-height: 55px;
  }
  .head1 ul li a{
    color: black;
  }
  audio{
    float: left;
    display: none;
  }
  .rl{
    width: 1000px;
    height: 30px;
    margin: auto;
    background: #fff8e6;
  }
  .rl ul{
    float: left;
    width: 500px;
  }
  .rl ul li{
    float: left;
    margin-left: 35px;
    line-height: 30px;
  }
  .rl ul li a{
    color: black;
  }
  .lb{
    width: 1000px;
    height: 300px;
    margin: auto;
    animation: myfirst 5S infinite;
  }
  @keyframes myfirst {
    0%{background: url("../../assets/images/b1.jpg");background-size: 100%;}
    25%{background: url("../../assets/images/b2.jpg");background-size: 100%;}
    50%{background: url("../../assets/images/b4.jpg");background-size: 100%;}
    100%{background: url("../../assets/images/b5.jpg");background-size: 100%;}
  }
  input[type=text]{
    float:left;
    text-indent: 2em;
    width: 300px;
    height: 25px;
    border-radius: 10px;
    margin-top: 100px;
    margin-left: 300px;
  }
  input[type=button]{
    float: left;
    width: 40px;
    height: 25px;
    border-radius:8px;
    margin-top: 100px;
  }
  table{
    width: 1000px;
    margin: auto;
    text-align: center;
  }
  .geci{
    position: fixed;
    left:550px;
    bottom: 10px;
    width: 800px;
    height: 50px;
    background: rgba(255,255,255,.5);
  }
</style>
