<template>
  <div class="main">

    <!--<swiper-slide>-->
    <!--<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">内容</p>-->
    <!--</swiper-slide>-->

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
    <div class="dr" id="dr">
      <div class="rl">
        <ul>
          <li><a href="">推荐</a></li>
          <li><a href="../bd">排行榜</a></li>
          <li><a href="">歌单</a></li>
          <li><a href="">主播电台</a></li>
          <li><a href="">歌手</a></li>
          <li><a href="">新歌上架</a></li>
        </ul>
        <div class="ss">
          <a href="../bd"><input type="text" id="song" placeholder="歌词搜索">
            <input type="button" value="搜索" id="btn"></a>
        </div>
      </div>
      <div class="lb" id="lb">
        <swiper :options="swiperOption">
          <swiper-slide><img src="../../assets/images/b1.jpg"></swiper-slide>
          <swiper-slide><img src="../../assets/images/b2.jpg"></swiper-slide>
          <swiper-slide><img src="../../assets/images/b4.jpg"></swiper-slide>
          <swiper-slide><img src="../../assets/images/b5.jpg"></swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="tj">
      <p class="t"></p>
      <p class="j"></p>
      <p class="g"></p>
      <h1>热门推荐</h1>
    </div>
    <div class="rm">
      <ul class="rm1">
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
        <li><a href=""><img src="../../assets/images/r1.jpg"></a><span>经典老歌，久听不厌</span></li>
      </ul>
    </div>
  </div>


</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import '.././../assets/js/swiper.animate.min'
  import '.././../assets/js/swiper.min'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "index",
    data() {
      return {
        swiperOption: {
          panigation: ".swiper-panigation",
          panigationClickable: true,
          effect: 'coverflow',
          slidesPerView: 2,
          centeredSlides: true,
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        },
        animateOption:{
          on:{
            init: function(){
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
    }
  }
</script>


<style scoped>
  @import "../../assets/css/animate.min.css";
  @import "../../assets/css/swiper.min.css";
  * {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    vertical-align: top;
  }

  .main {
    width: 100%;
    height: 100%;
  }

  .head {
    width: 100%;
    height: 55px;
    background: pink;
  }

  .head1 {
    width: 1000px;
    height: 55px;
    margin: auto;
  }

  .head1 h1 {
    float: left;
    font-size: 20px;
    line-height: 55px;
  }

  .head1 ul {
    float: left;
  }

  .head1 ul li {
    float: left;
    margin-left: 30px;
    height: 55px;
    line-height: 55px;
  }

  .head1 ul li a {
    color: black;
  }

  /*--------------dr----------*/
  .dr {
    width: 100%;
    height: 430px;
  }

  .rl {
    width: 1000px;
    height: 30px;
    margin: auto;
    background: #fff8e6;
  }

  .rl ul {
    float: left;
    width: 500px;
  }

  .rl ul li {
    float: left;
    margin-left: 35px;
    line-height: 30px;
  }

  .rl ul li a {
    color: black;
  }

  .ss {
    float: right;
    width: 350px;
    height: 30px;
    z-index: 99;
    /*animation: myfirst 5S infinite;*/
  }

  .ss input[type=text] {
    float: left;
    text-indent: 2em;
    width: 300px;
    height: 25px;
    border-radius: 10px;
    border: 1px solid cornflowerblue;
  }

  .ss input[type=button] {
    float: left;
    width: 40px;
    height: 25px;
    border-radius: 8px;
  }

  .lb {
    width: 100%;
    height: 400px;
    margin: auto;
    position: relative;
  }

  .swiper-container {
    width: 1200px;
    height: 400px;
  }

  .swiper-container .swiper-slide img {
    height: 400px;
    width: 500px;
  }

  .lb ul {
    width: 1000px;
    height: 400px;
  }

  .lb ul li {
    width: 100%;
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .lb ul li img {
    width: 1000px;
    height: 400px;
    margin: auto;
  }

  .lb p {
    position: absolute;
    bottom: 10px;
    left: 45%;
  }

  .lb p .cur {
    background: plum;
  }

  .lb p span {
    float: left;
    width: 20px;
    height: 20px;
    margin: 10px;
    background: white;

  }

  .lb strong {
    color: black;
    font-size: 40px;
    cursor: pointer;
    position: absolute;
  }

  .lb .pre {
    top: 40%;
    left: 20%;
    color: plum;

  }

  .lb .nex {
    color: plum;
    top: 40%;
    right: 20%;
  }

  table {
    width: 1000px;
    height: 100%;
    background: rgba(255, 255, 255, .5);
  }

  td {
    height: 30px;
    border-bottom: 1px dotted red;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: red;
    text-decoration: underline;
  }

  audio {
    float: right;
  }

  .tj {
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    border-bottom: 2px dotted green;
  }

  .tj .t {
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  .tj .g {
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  .tj .j {
    width: 10px;
    height: 10px;
    margin-top: 0;
    margin-left: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  @keyframes mymove {
    from {
      top: 0
    }
    to {
      top: 50px
    }
  }

  .tj h1 {
    float: left;
    font-size: 20px;
    margin-left: 20px;
    color: red;
    margin-top: -15px;
  }

  .rm {
    width: 1000px;
    height: 450px;
    margin: auto;
  }

  .rm1 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
  }

  .rm1 li {
    margin-top: 40px;
    width: 250px;
    height: 160px;
  }

  .rm1 li img {
    margin-bottom: 5px;
  }

  .rm1 li span {
    display: block;
  }

  .zx {
    width: 1000px;
    height: 50px;
    margin: 0 auto;
    border-bottom: 2px dotted green;
  }

  .zx .t {
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  .zx .g {
    width: 10px;
    height: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  .zx .j {
    width: 10px;
    height: 10px;
    margin-top: 0;
    margin-left: 10px;
    background: green;
    border-radius: 50%;
    animation: mymove 5S infinite;
    position: relative;
  }

  @keyframes mymove {
    from {
      top: 0
    }
    to {
      top: 50px
    }
  }

  .zx h1 {
    float: left;
    font-size: 20px;
    margin-left: 20px;
    color: red;
    margin-top: -15px;
  }

  .zm {
    width: 1000px;
    height: 450px;
    margin: auto;
    background: pink;
  }

  .zm1 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
  }

  .zm1 li {
    margin-top: 40px;
    width: 250px;
    height: 160px;
  }

  .zm1 li img {
    margin-bottom: 5px;
  }

  .zm1 li span {
    display: block;
  }


</style>
