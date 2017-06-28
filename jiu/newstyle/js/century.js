// 产品详情轮播图
$(function () {
    var $page = $('.century-page');
    var $section = $page.find('.x-display');
    var $slide = $section.find('.x-slide');
    $slide.slide({
        mainCell: ".bd ul",
        autoPlay: true,
        autoPage: true,
        vis: 3,
        effect: "left",
        trigger: "click",
        interTime: 5000,
        pnLoop: false
    });
});
// 吸顶
$(function () {
    new Sticky($('.century-page > .x-head'));
});
$(".imgclassa").hover(function(){
  $(this).attr("src","newstyle/image/intro_1h.png");
},function(){
	$(this).attr("src","newstyle/image/intro_1.png");	
})
$(".imgclassb").hover(function(){
  $(this).attr("src","newstyle/image/intro_2h.png");
},function(){
	$(this).attr("src","newstyle/image/intro_2.png");	
})
$(".imgclassc").hover(function(){
  $(this).attr("src","newstyle/image/intro_3h.png");
},function(){
	$(this).attr("src","newstyle/image/intro_3.png");	
})
$(".imgclassd").hover(function(){
  $(this).attr("src","newstyle/image/intro_4h.png");
},function(){
	$(this).attr("src","newstyle/image/intro_4.png");	
})