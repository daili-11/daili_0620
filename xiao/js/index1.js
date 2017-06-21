var shopid = $('#shopid').val()
var salerid = $('#salerid').val()
// var bannerImg = ''
// var wxTitle = ''
/*活动介绍*/
$.get("/special.php/Shop/getSpecial/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  if ( data.status) {
    // bannerImg = 'http://tuan.wsche.com/Uploads/' + data.result[0].banner
    // wxTitle = data.result[0].title
    $('.acTitle').text(data.result[0].title)
    $('title').text(data.result[0].title)
    $('.banner img').attr('src','/Uploads/'+data.result[0].banner)
    $('.mNum').text(data.result[0].price)
    $('.txt>p').text(data.result[0].details)
    // data.result[0]
    var timer = setInterval(function(){
      var NowTime = new Date();
      var t =data.result[0].endtime*1000 - NowTime;
      if (t < 0) {
        $(".time i").text("已结束"); 
        clearInterval(timer);
        return false
      }
      var d=Math.floor(t/1000/60/60/24);
      var h=Math.floor(t/1000/60/60%24);
      var m=Math.floor(t/1000/60%60);
      var s=Math.floor(t/1000%60);
      d = xiaozhou(d);
      h = xiaozhou(h);
      m = xiaozhou(m);
      s = xiaozhou(s);
      $(".time i").text(d + ' 天 ' + h + ' 时 ' +m+ ' 分 ' +s+ ' 秒')
    },1000)

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')

/*爆款车型*/
$.get("/special.php/Shop/getExplosion/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  if ( data.status) {
    
    var listTpl = [];
    var img = []
    $.each(data.result,function(i,v) {
      listTpl.push([
        '<li>',
          '<p class="mover" style="border: 1px solid #51f1f9;border-bottom: none;"></p>',
          '<div class="hotCar">',
            '<div>',
              '<div class="logo"><img src="/Uploads/'+v.logo+'"  alt=""></div>',
              '<div class="carImg" ><img src="/Uploads/'+v.img+'" alt=""></div>',
              '<p class="carName">'+v.name+'</p>',
            '</div>',
          '</div>',
          '<p class="mover" style="border: 1px solid #51f1f9;border-top: none;"></p>',
        '</li>'
      ].join(''));
      img.push(/Uploads/+v.img)
      img.push(/Uploads/+v.logo)
    })

    $list = $(listTpl.join(''));
    $("#hotCar").prepend($list)

    $.each(img,function(i,v) {
      var Img = new Image()
      Img.src = v
      if ( i + 1 >= img.length) {
        /*层叠滑动*/
        $('#hotCar').roundabout({
          shape: 'waterWheel',
          minOpacity: 0.1,
          duration: 300,
          dragFactor: 1,
          enableDrag: true,
          minScale:0.8,
          dragAxis:'y'
        })
      }
    })

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')
/*亮点*/
$.get("/special.php/Shop/getHighlights/shopid/"+shopid+"/salerid/"+salerid,function(data) {

  if ( data.status) {
    var listTpl = [];
    $.each(data.result,function(i,v) {
      listTpl.push([
        '<div >',
          '<p class="lTitle">'+v.title+'</p>',
          '<p class="lCon">'+v.content+'</p>',
          '<div class="lImg">',
            '<img src="/Uploads/'+v.img+'" alt="">',
          '</div>',
        '</div>'
      ].join(''));
    })
    $list = $(listTpl.join(''));
    $(".lightImg").append($list)

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')
/*大礼送不停*/
$.get("/special.php/Shop/getGift/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  if ( data.status) {
    var listTpl = [];
    $.each(data.result,function(i,v) {
      listTpl.push([
        '<div>',
          '<p>'+v.title+'</p>',
          '<p>'+v.details+'</p>',
        '</div>'
      ].join(''));
    })
    $list = $(listTpl.join(''));
    $(".giCon").append($list)

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')
/*购车抽大礼*/
$.get("/special.php/Shop/getLuck/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  if ( data.status) {
    var listTpl1 = [];
    var listTpl2 = []
    $.each(data.result,function(i,v) {
      if ( i<= 2) {
        listTpl1.push([
          '<div class="rollImg">',
            '<div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',           
            '</div>',
          '</div>'
        ].join(''));
      }else{
        listTpl2.push([
          '<div class="rollImg">',
            '<div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',
              '<div>',
                '<img src="/Uploads/'+v.img+'" alt="">',
                '<p>'+v.title+'</p>',
              '</div>',           
            '</div>',
          '</div>'
        ].join(''));
        listTpl2.push(listTpl1[0])
        listTpl2.push(listTpl1[0])
      }
    })
    $list1 = $(listTpl1.join(''));
    $list2 = $(listTpl2.join(''));
    $(".roll1:eq(0)>div").append($list1)
    $(".roll1:eq(1)>div").append($list2)

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')
/*往届回顾*/
$.get("/special.php/Shop/getReview/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  // console.log(data)
  if ( data.status) {
    var listTpl = [];
    var img = []
    $(".review").css('height',data.result.length<6 ? data.result.length+'rem' : 4+'rem')
    $.each(data.result,function(i,v) {
      listTpl.push([
        '<li>',
         '<a href="'+v.link+'" target="_blank">',
          '<p class="mover" style="border-bottom: 1px solid #51f1f9;"></p>',
          '<div>',
            '<div class="reImg">',
              '<img src="/Uploads/'+v.img+'" alt="">',
            '</div>',
            '<p class="reTitle">'+v.title+'</p>',
          '</div>',
          '<p class="mover" style="border-top: 1px solid #51f1f9;"></p>',
          '</a>',
        '</li>'
      ].join(''));
      img.push(/Uploads/+v.img)
    })
    $list = $(listTpl.join(''));
    $(".review").prepend($list)

    $.each(img,function(i,v) {
      var Img = new Image()
      Img.src = v
      if ( i + 1 >= img.length) {
        /*层叠滑动2*/
        $('.review').roundabout({
          shape: 'tearDrop',
          minOpacity: 1,
          duration: 300,
          enableDrag: true,
          dragFactor: 1,
          minScale:0.8,
          dragAxis:'y'
        });
      }
    })

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
},'json')
/*报名页面*/
var salerName = ''
$.get("/special.php/Shop/getShopMessage/shopid/"+shopid+"/salerid/"+salerid,function(data) {
  if ( data.status) {
    //店铺信息
    salerName = data.result[0].name
    $('.acPla span:nth-child(2)').text(data.result[0].add)
    $('.acTime span:nth-child(2)').text(format(data.result[0].endtime))
    $('.acRou span:nth-child(2)').text(data.result[0].line)
    $('#counts').text(data.result[0].counts*1+3)
    $('.timeA').text(format(data.result[0].endtime))
    $('.title').text(data.result[0].title)
    $('.name').text(data.result[0].name)
    $('.phone').text(data.result[0].phone)
    $('.callPhone').attr('href','tel:'+data.result[0].phone)
    //下拉车型选择
    var cars = []
    $.each(data.cars,function(i,v) {
      cars.push([
        '<option value="'+v.brandid+'">',
          v.brandname,
        '</option>'
      ].join(''));
    })
    $list = $(cars.join(''));
    $("#cars").append($list)
    //已报名活动框
    var people = []
    $.each(data.list,function(i,v) {
      people.push([
        '<li>',
          '<em>',
            v.txtname.substring(0,1),
          '**</em>',
          '<span>',
            v.txtphonenumber.substring(0,3),
          '********</span>',
          '<i>已成功报名</i>',
        '</li>'
      ].join(''))
    })
    $peoplelist = $(people.join(''));
    // console.log($peoplelist)
    $(".bmreszi").append($peoplelist)

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

  }else{
    layer.open({
      content: data.message
      ,btn: '我知道了'
    });
  }
  
},'json')

/*点击报名*/
$('.upBtn').click(function() {
  if ( !$('#upName').val().replace(/(^\s*)|(\s*$)/g, "")) {
    layer.open({
      content: '请输入姓名！'
      ,btn: '我知道了'
    });
    return false
  }else if( !(/^1[3|4|5|8][0-9]\d{4,8}$/.test($('#upPhone').val()))){
    layer.open({
      content: '请输入正确格式的电话号码！'
      ,btn: '我知道了'
    });
    return false
  }else if( !$('#cars').val()){
    layer.open({
      content: '请选择车型！'
      ,btn: '我知道了'
    });
    return false
  }

  var index = layer.open({
    type: 2
    ,shadeClose: false
    ,content: '提交中'
  });

  $.post("/special.php/Shop/region",{shopid:shopid,salerid:salerid,txtName:$('#upName').val().replace(/(^\s*)|(\s*$)/g, ""),txtPhoneNumber:$('#upPhone').val(),drpSeries:$('#cars').val()},function(data) {
    layer.close(index)

    if ( data.status == 1) {
      goPay(data)

    }else if( data.status == 2){

      layer.open({
        content: '您之前已支付，是否跳转至砍价？'
        ,btn: ['是', '否']
        ,yes: function(index){
          location.href = "http://wx.wsche.com/sha/?b="+data.baoming[0].id+"&e="+shopid
        }
      });

    }else if( data.status == 3){

      layer.open({
        content: '您之前已报名，但未支付，是否现在支付？'
        ,btn: ['是', '否']
        ,yes: function(index){
          goPay(data)
        }
      });

    }else{
      layer.open({
        content: data.message
        ,btn: '我知道了'
      });
    }
  },'json')

})


var bg_img = ['/Public/Special/images/bg1.png','/Public/Special/images/btn.png','/Public/Special/images/car.png','/Public/Special/images/city.png','/Public/Special/images/clock.png','/Public/Special/images/daba.png','/Public/Special/images/gan.png','/Public/Special/images/gif.png','/Public/Special/images/go.png','/Public/Special/images/left3.png','/Public/Special/images/chou.jpg','/Public/Special/images/light1.png']
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
      }, 4000)
    }
  }
})


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
    

  });

})
/*安卓输入*/

var winHeight = $(window).height();   //获取当前页面高度
$(window).resize(function(){
  var thisHeight=$(this).height();
  if(winHeight - thisHeight >50){
  //当软键盘弹出，在这里面操作
  $('.baoming').addClass('baomings')
  }else{
  //当软键盘收起，在此处操作
  $('.baoming').removeClass('baomings')
  }
});

/*支付接口*/
function goPay(data){
  var wxBody = $('.acTitle').text();
  var plusView = 'newpay_plus';
  var plusTxt = '【'+data.baoming[0].price+'元门票】';
  money =  data.baoming[0].price*100;
  // var money =  1;
  url ='http://wx.wsche.com/front/pay/newpay?total_fee='+money+'&notify_url=http://expo.wsche.com/gw/ca/wxorderUp&view='+ plusView;
  url += '&detail='+data.baoming[0].id+'&order_no='+data.baoming[0].order_no+'&body='+plusTxt+'__'+wxBody+'&price='+data.baoming[0].price;
  url = encodeURI(url);
  location.href = (url);
}

//时间戳转化封装
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
  {
  //shijianchuo是整数，否则要parseInt转换
  var cuo = shijianchuo*1000
  var time = new Date(cuo);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
//倒计时
function xiaozhou(d){
  return d = d< 10 ? d= "0"+d : d;
}




var mySwiper = new Swiper ('.swiper-container', {
  longSwipesRatio : 0.1,
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
  mySwiper.slideTo(6,1000,false);//切换到最后一个slide，速度为1秒
})






