<template>
  <div class="main">
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
        <div class="ss">
          <a href="../ss"><input type="text" id="song" placeholder="歌词搜索">
            <input type="button" value="搜索" id="btn"></a>
        </div>
      </div>
    </div>
    <div class="rl">
      <ul>
        <li><a href="/">推荐</a></li>
        <li><a href="../bd">新歌榜</a></li>
        <li><a href="../rg">热歌榜</a></li>
        <li><a href="../yc">原创歌榜</a></li>
        <li><a href="../">音乐电声榜</a></li>
        <li><a href="../">音乐排行榜</a></li>
      </ul>
    </div>
    <table cellspacing="0" cellpadding="0" border="1" id="table">
      <tr>
        <td>歌曲</td>
        <td>歌手</td>
      </tr>
    </table>
    <div class="geci" id="gc"></div>
  </div>

</template>

<script>

  $(function() {
    var ph = 'http://www.young1024.com:666/top/list?idx=0';
    $.ajax({
      type: "get",
      url: ph,
      dataType: "json",
      success: function (data) {
        var songs = data['playlist']['tracks'];
        // document.write(songs)
        var sv = Array();
        $.each(songs, function (key, value) {
          sv = value;
          var sN = '<tr><td  style="background: #fff8e6;" ><span name="' + sv['id'] + '">' + sv['name'] + '</span></td><td style="background: #f8d6d4;" >' + sv['ar']['0']['name'] + '</td></tr>';
          $('#table').append(sN)
        });
        $('span').click(function () {
          // $('#toop').empty();
          var songId = $(this).attr('name');
          var gp = 'https://music.163.com/song/media/outer/url?id=' + songId;
          $('#audio').attr('src', gp);

          var geci = 'http://www.young1024.com:666/lyric?id=' + songId;
          // alert(geci )
          $.ajax({
            type: "get",
            url: geci,
            dataType: "json",
            success: function (data) {
              var text = data['lrc']['lyric'];
              // document.write(text)
              var textArr = text.split("[");
              var html = "";
              for (var i = 1; i < textArr.length; i++) {
                var timeAndgc = textArr[i].split("]");
                var time = timeAndgc[0];
                var gc = timeAndgc[1];
                var s = time.split(".");
                var hs = s[1];
                var f = s[0].split(":");
                var _ms = f[0] * 60 + f[1] * 1;
                html = html + "<p id=" + _ms + ">" + gc + "</p>";
              }
              $('#gc').append(html);
              $('p').eq(0).show().siblings().hide();
              $("#audio")[0].addEventListener("timeupdate", function () {
                var timer = this.currentTime;
                var s = parseInt(timer);
                for (var i = 0; i < s; i++) {
                  $("#" + i).stop().slideDown(300).siblings().hide()
                }
              });

            }
          })
        })
      }
    })
  })
  export default {
    name: "bd"
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
    background: url("../../assets/images/b1.jpg") ;
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
  video{
    float: right;
    width: 301px;
    height: 151px;
  }
  .ss{
    float: right;
    width: 350px;
    height: 30px;
    margin-top: 15px;
  }
  .ss input[type=text]{
    float:left;
    text-indent: 2em;
    width: 300px;
    height: 25px;
    border-radius: 10px;
  }
  .ss  input[type=button]{
    float: left;
    width: 40px;
    height: 25px;
    border-radius:8px;
  }
  table{
    width: 80%;
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
  .rl{
    width: 1000px;
    height: 30px;
    margin: auto;
    background: #fff8e6;
  }
  .rl ul{
    float: left;
    width: 1000px;
  }
  .rl ul li{
    float: left;
    margin-left: 35px;
    line-height: 30px;
  }
  .rl ul li a{
    color: black;
  }
  table{
    width:1000px;
    margin: auto;
  }
</style>
