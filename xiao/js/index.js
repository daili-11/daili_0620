var bg_img = ['images/bg1.png','images/btn.png','images/car.png','images/city.png','images/clock.png','images/daba.png','images/gan.png','images/gif.png','images/go.png','images/left3.png']
var len = bg_img.length
$.each(bg_img,function(i,v) {
  var Img = new Image()
  Img.src = v
  Img.onload = function ()

  {
    $('.pecent').text(((i+1)/len*100).toFixed(2)+'%')
    if ( i + 1 >= len) {
      $('.loding').hide()
      setTimeout(function(){
        $('.enterBtn').fadeIn()
      }, 5000)
    }
  }
})

$('[data-js-src]').attr('src',function () {return $(this).attr('data-js-src')})
$('[data-src]').attr('src',function () {return $(this).attr('data-src')})



/*点击进入*/
var h = $('.contend>div').height()
$('.enterBtn').click(function() {
  $('.page1').addClass('page1Animate')
  /*第一页移动完毕*/
  $(".page1").on("webkitAnimationEnd", function(){ 
    /*下拉动画*/
    $('.contend').animate({height:h+'px'},1000,'easeOutBounce',function() {
      $('.money>p').fadeIn()
    })
    /*层叠滑动*/
    $('#hotCar').roundabout({
      shape: 'waterWheel',
      minOpacity: 0.1,
      duration: 300,
      enableDrag: true,
      minScale:0.8,
      dragAxis:'y'
    })
    /*层叠滑动2*/
    $('.review').roundabout({
      shape: 'tearDrop',
      minOpacity: 1,
      duration: 300,
      enableDrag: true,
      minScale:0.8,
      dragAxis:'y',
      triggerFocusEvents:false
    });

  });

})

 //报名滚动
var tt = $(".bmreszi li").length;
var hh = $("#FontScroll").height();
if(tt<1){
  $("#FontScroll").hide();
}
else if(tt>=3){
  settime = setInterval(function () {
    var $first = $("#FontScroll ul");     //选取div下的第一个ul 而不是li；
    var height = $first.find("li:first").height();      //获取第一个li的高度，为ul向上移动做准备；
    $first.animate({ "marginTop": - height + "px" }, 600, function () {
      $first.css({ marginTop: 0 }).find("li:first").appendTo($first); //设置上边距为零，为了下一次移动做准备
    });
  }, 3000);
}
var mySwiper = new Swiper ('.swiper-container', {
  onInit: function(swiper){
    //Swiper初始化了
    
  },
  onSlideChangeEnd: function(swiper){
    
    if ( swiper.activeIndex == 2) {
      $('.lightImg>div').each(function(i) {
        $(this).addClass('light'+(i+1)+'Animate')
      })
    }else if( swiper.activeIndex == 4){
      $('.rollImg>div').each(function() {
        $(this).addClass('rollAnimate')
      })
    }
  },
  
}) 

$('.uploadBtn').click(function(){
  mySwiper.slideTo(6, 1000, false);//切换到最后一个slide，速度为1秒
}) 