


//js开始
$(function (){

    //loading
    var imgarr = ["./img/bullet1.png","./img/bullet2.png","./img/canvas_bg.png","./img/countdown_1.png","./img/countdown_2.png","./img/countdown_3.png","./img/countdown_bg.png","./img/countdown_go.png","./img/enemy1.png","./img/enemy1_e.png","./img/enemy2.png","./img/enemy2_e.png","./img/enemy3.png","./img/enemy3_e.png","./img/fenshu_bg.png","./img/fx_bg.png","./img/fx_shou.png","./img/loading_biaoti.png","./img/loading_guai_1.png","./img/loading_guai_2.png","./img/loading_guai_3.png","./img/loading_t_center.png","./img/loading_t_left.png","./img/loading_t_right.png","./img/loading_tiao_bg.png","./img/logo.png","./img/over_0.png","./img/over_0_e.png","./img/over_1.png","./img/over_1_e.png","./img/over_2.png","./img/over_2_e.png","./img/over_anniu_1.png","./img/over_anniu_2.png","./img/over_bg.jpg","./img/over_superman.png","./img/plane.png","./img/product.png","./img/prop2.png","./img/ranking_1.png","./img/ranking_2.png","./img/ranking_3.png","./img/rule_bg.png","./img/shouye_anniu_1.png","./img/shouye_bg.jpg","./img/shouye_biaoti.png","./img/shouye_guai_1.png","./img/shouye_guai_2.png","./img/shouye_guai_3.png","./img/shouye_guize.png","./img/shouye_jiangpin.png","./img/shouye_superman.png","./img/shouye_superman_bg.png","./img/shouye_superman_guang.png","./img/story_1_bg.png","./img/story_1_bg_z.png","./img/story_2_bg.png","./img/story_3_bg.png","./img/story_describe_1.png","./img/story_describe_2.png","./img/story_describe_3.png","./img/story_superman.png"];
    var imgobj = [];
    var imgs = 0;
    var jindu = 0;
    for (var i = 0,len = imgarr.length; i < len; i++) {
        imgobj[i] = new Image();
        imgobj[i].src = imgarr[i];
        imgobj[i].onload = function (){
            $(".tu_loading").append('<img src="' + this.src + '" alt="">');
            imgs++;
            jindu = Math.floor((imgs / len)*100) * 0.01;
            jindu = jindu.toFixed(2);
            $(".loading_t").css("width",jindu*($(".loading_tiao").width()) + "px");
            jindu = jindu * 100;
            jindu = Math.floor(jindu);
            $(".loading_zi").text(jindu + "%");
            if (imgs >= len) {
                $(".loading").fadeOut(600,function (){
                    $(".story_div").css("-webkit-transform","none");
                });
                if (mc_TF) {
                    bgmp3.play();
                }
            };
        }
    };


    //定时器开始
    // var timer = setInterval(function (){},2000);
    // clearInterval(timer);

    // var timer_o = setTimeout(function (){},2000);
    // clearTimeout(timer_o);
    //定时器结束

    
    //全部点击事件开始

    // 音乐图标点击事件
    var mc_TF = true;
    $("#yinyuetubiao").on('click',function (){
        if ($("#yinyuetubiao").attr("src") == "./img/yue.png") {
            mc_TF = false;
            bgmp3.currentTime = 0;
            bgmp3.pause();
            $("#yinyuetubiao").removeClass("yinyuetubiao");
            $("#yinyuetubiao").attr("src","./img/yue2.png");
        } else{
            mc_TF = true;
            bgmp3.play();
            $("#yinyuetubiao").addClass("yinyuetubiao");
            $("#yinyuetubiao").attr("src","./img/yue.png");
        };
    });




    // 故事动画结束
    var story_TF = false;
    $(".story_describe_3").get(0).addEventListener('webkitTransitionEnd',function (e){
        $(".story_move").addClass("story_move_play");
        // $(".story_tishi").css("top","50%");
        story_TF = true;
        e.stopPropagation();
    }, false);
    // 故事页点击关闭事件
    $(".story_box").get(0).addEventListener('webkitAnimationEnd',function (e){
        if (story_TF) {
            story_TF = false;
            $(".story_move").removeClass("story_move_play");
            $(".story_box").css("-webkit-transform","rotate(-90deg)");
            $(".shouye").addClass("shouye_e");
        }
    }, false);



    // 活动规则点击事件
    $(".shouye_anniu_2").on("click",function (){
        $(".shouye_guize_box").css("-webkit-transform","none");
    });
    // 活动规则关闭点击事件
    $(".shouye_guize_box").on("click",function (){
        $(this).css("-webkit-transform","translate3d(0px,1136px,0px)");
    });
    // 查看奖品点击事件
    $(".shouye_anniu_3").on("click",function (){
        $(".shouye_jiangpin_box").css("-webkit-transform","none");
    });
    // 查看奖品关闭点击事件
    $(".shouye_jiangpin_box").on("click",function (){
        $(this).css("-webkit-transform","translate3d(0px,1136px,0px)");
    });

    // 进入游戏
    var TF = false;
    var rule_TF = true;
    $(".shouye_anniu_1").one("click",function (){
        $(".shouye").css("-webkit-transform","rotate(90deg)");
        var timer_o = setTimeout(function (){
            if (rule_TF) {
                rule_TF = false;
                rule_way();
            }
        },8000);
    });

    // 游戏玩法页关闭
    $(".rule").on("click",function (){
        if (rule_TF) {
            rule_TF = false;
            rule_way();
        }
    });
    function rule_way(){
        $(".rule").css("-webkit-transform","rotate(-90deg)");
        $(".countdown").addClass("countdown_play");
    }

    // 倒计时结束
    $(".countdown_go").get(0).addEventListener('webkitAnimationEnd',function (e){
        $(".hide").hide();
        TF = true;
        e.stopPropagation();
    }, false);



    // 画布
    var canvas = document.getElementById('canvas1');
    // 判断是否是手机系统
    function isAdater(){
        var Agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];
        var userAgentInfo = navigator.userAgent;
        var flag = false;
        for (var i = 0; i < Agents.length; i++) {
            if (userAgentInfo.indexOf(Agents[i]) > 0) {
                flag = true;
                break;
            }
        }
        return flag;
    }
    if (isAdater()) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    };
    var ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var fps = -1;
    var fps_s = 1;

    var imger = 0;
    var bullets = [];
    var props = [];
    var enemys = [];
    var grade = 0;

    var bullet_draw = 10;
    var bulletspeed = 30;
    var enemy_draw = 20;
    var enemyspeed = 3;
    var props_draw = 500;
    var bullet_z = 0;
    var p_o = 0;

    // 敌人爆炸音效控制
    var mus = 0;
    var bgmp3 = document.getElementById('bgmp3');
    bgmp3.volume = 0.2;
    var bullet_mp3 = document.getElementById('bullet_mp3');
    var e1_mp3 = document.getElementById('e1_mp3');
    var e2_mp3 = document.getElementById('e2_mp3');
    var e3_mp3 = document.getElementById('e3_mp3');
    var e4_mp3 = document.getElementById('e4_mp3');
    var e5_mp3 = document.getElementById('e5_mp3');
    var bomb_mp3 = document.getElementById('bomb_mp3');
    var over_mp3 = document.getElementById('over_mp3');

    // canvas图片
    var imgbg = new Image();
    imgbg.src="./img/canvas_bg.png";

    var imgplane = new Image();
    imgplane.src="./img/plane.png";

    var imgbullet1 = new Image();
    imgbullet1.src="./img/bullet1.png";

    var imgbullet2 = new Image();
    imgbullet2.src="./img/bullet2.png";

    var imgprop1 = new Image();
    imgprop1.src="./img/bullet2.png";

    var imgprop2 = new Image();
    imgprop2.src="./img/prop2.png";

    var imgprop2_e = new Image();
    imgprop2_e.src="./img/prop2_e.png";

    var imgprop2_ee = new Image();
    imgprop2_ee.src="./img/prop2_ee.png";

    var imgenemy1 = new Image();
    imgenemy1.src="./img/enemy1.png";
    var imgenemy1_e = new Image();
    imgenemy1_e.src="./img/enemy1_e.png";

    var imgenemy2 = new Image();
    imgenemy2.src="./img/enemy2.png";
    var imgenemy2_e = new Image();
    imgenemy2_e.src="./img/enemy2_e.png";

    var imgenemy3 = new Image();
    imgenemy3.src="./img/enemy3.png";
    var imgenemy3_e = new Image();
    imgenemy3_e.src="./img/enemy3_e.png";

    var imgfenshu_bg = new Image();
    imgfenshu_bg.src="./img/fenshu_bg.png";

    //随机数
    function fnRand(min,max){
        return parseInt(Math.random()*(max-min)+min);
    }

    //撞击判断
    function crash(obj1,obj2){

        var l1 = obj1.x;
        var r1 = obj1.x+obj1.w;
        var t1 = obj1.y; 
        var b1 = obj1.y+obj1.h;
        var l2 = obj2.x;
        var r2 = obj2.x+obj2.w;
        var t2 = obj2.y; 
        var b2 = obj2.y+obj2.h;

        if (l1<r2&&r1>l2&&t1<b2&&b1>t2){
            return true;
        }else{
            return false;
        }
    }
    //我方飞机撞击判断
    function p_crash(obj1,obj2){

        var l1 = obj1.x+20;
        var r1 = obj1.x+obj1.w-20;
        var t1 = obj1.y+30; 
        var b1 = obj1.y+obj1.h-30;
        var l2 = obj2.x;
        var r2 = obj2.x+obj2.w;
        var t2 = obj2.y; 
        var b2 = obj2.y+obj2.h;

        if (l1<r2&&r1>l2&&t1<b2&&b1>t2){
            return true;
        }else{
            return false;
        }
    }

    //我方飞机
    var plane = {
        z:0,
        o:0,
        blood:1,
        img:imgplane,
        w:138,
        h:133,
        x:canvasWidth*0.5-70,
        y:canvasHeight*0.7,
        fps:0,
        imgplaneX:0,
        imgplaneY:0,
        left:false,
        right:false,
        top:false,
        bottom:false,
        draw:function (){
            this.move();
            ctx.drawImage(this.img, this.imgplaneX, this.imgplaneY, this.w, this.h, this.x, this.y, this.w, this.h);
        },
        move:function (){
            if (this.x <= 0) {
                this.x = 0;
                this.left = false;
            };
            if (this.x >= canvasWidth-this.w) {
                this.x = canvasWidth-this.w;
                this.right = false;
            };
            if (this.y <= 0) {
                this.y = 0;
                this.top = false;
            };
            if (this.y >= canvasHeight-this.h) {
                this.y = canvasHeight-this.h;
                this.bottom = false;
            };

            if (this.left && !this.right) {
                this.x -= speed*2;
            };
            if (this.right && !this.left) {
                this.x += speed*2;
            };
            if (this.top && !this.bottom) {
                this.y -= speed*2;
            };
            if (this.bottom && !this.top) {
                this.y += speed*2;
            };
            this.left = false;
            this.right = false;
            this.top = false;
            this.bottom = false;

            this.fps++;
            if (this.fps > 2) {
                this.fps = 0;
                if (this.blood == 0) {
                    this.imgplaneX += this.w;

                    if (this.imgplaneX == this.w*3) {

                        if (localStorage.grade) {
                            if (grade > localStorage.grade) {}
                        }else{
                            localStorage.setItem("grade",grade);
                        }

                        // 游戏结束
                        if (mc_TF) {
                            over_mp3.play();
                        }
                        
                        $(".mark").text(grade);
                        $(".over").addClass("over_e");
                    };

                    if (this.imgplaneX == this.w*8) {
                        this.imgplaneX = this.w*7;
                    };
                } else {
                    this.imgplaneX = this.imgplaneX > 0 ? 0 : this.w;
                }
            }
            
        }
    };

    //子弹
    function Bullet(){
        this.blood = 1;
        this.w = 40;
        this.h = 40;
        this.img = imgbullet1;
        if (plane.z == 1) {
            this.blood = 3;
            this.w = 59;
            this.h = 59;
            this.img = imgbullet2;
        };
        this.x = plane.x + plane.w*0.5 - this.w*0.5;
        this.y = plane.y - this.h;
        this.draw = function (){
            this.move();
            ctx.drawImage(this.img, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
        };
        this.move = function (){
            this.y -= bulletspeed;
        };
    }

    //道具
    function Prop(){
        this.fn = fnRand(0,2);
        this.w = 59;
        this.h = 59;
        this.img = imgprop1;
        if (this.fn == 1) {
            this.w = 76;
            this.h = 72;
            this.img = imgprop2;
        };
        this.x = fnRand(0,canvasWidth - this.w);
        this.y = -this.h;
        this.draw = function (){
            this.move();
            ctx.drawImage(this.img, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
        };
        this.move = function (){
            this.y += enemyspeed*0.5;
        };
    }

    //敌机
    function Enemy(){
        var fn = fnRand(0,15);
        this.fn = fn;
        this.speed = enemyspeed;
        this.fps = 0;
        this.one = true;
        
        if (this.fn < 10) {
            this.img = imgenemy1;
            this.blood = 1;
            this.w = 90;
            this.h = 90;
        }else if (this.fn < 14) {
            this.speed = enemyspeed*0.7;
            this.img = imgenemy2;
            this.blood = 5;
            this.w = 100;
            this.h = 100;
        } else {
            this.speed = enemyspeed*0.4;
            this.img = imgenemy3;
            this.blood = 10;
            this.w = 110;
            this.h = 110;
        }
        this.imgenemyX = 0;
        this.imgenemyY = 0;
        this.x = fnRand(1,canvasWidth - this.w);
        this.y = fnRand(-this.h - 20,-this.h);
        this.draw = function (){
            this.move();
            ctx.drawImage(this.img, this.imgenemyX, this.imgenemyY, this.w, this.h, this.x, this.y, this.w, this.h);
        };
        this.move = function (){
            this.fps++;
            if (this.blood > 0) {
                this.y += this.speed;
                if (this.fps > 2) {
                    this.fps = 0;
                    if (this.imgenemyX < this.w*3) {
                        this.imgenemyX += this.w;
                    } else {
                        this.imgenemyX = 0;
                    }
                }   
            } else {
                if (this.fps > 2) {
                    this.fps = 0;
                    if (this.one) {
                        this.one = false;
                        this.imgenemyX = 0;
                        this.w = 200;
                        this.h = 200;
                        this.x -= 50;
                        this.y -= 50;
                        if (this.fn < 10) {
                            this.img = imgenemy1_e;
                        }else if (this.fn < 14) {
                            this.img = imgenemy2_e;
                        } else {
                            this.img = imgenemy3_e;
                        }
                    } else {
                        this.imgenemyX += this.w;
                        if (this.imgenemyX > 800) {
                            this.imgenemyX = 800;
                        }
                    }
                } 
            }
        }
    }



    function start(){
    fps++;
    if (fps > 2000) {
        fps = 1;
    };
    if (TF && (fps%fps_s==0)) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(imgbg, 0, 0, 640, 1080, 0, 0, canvasWidth, canvasHeight);

        //子弹和敌机的判断
        for (var i = 0,len = bullets.length; i < len; i++) {
            if (bullets[i].y > 0 && plane.blood > 0) {
                for (var j = 0,lenj = enemys.length; j < lenj; j++) {
                    if (enemys[j].y < canvasHeight && enemys[j].blood > 0 && crash(bullets[i],enemys[j])) {
                        enemys[j].blood -= bullets[i].blood;
                        if (enemys[j].blood <= 0) {

                            if (enemys[j].fn < 10) {
                                grade += 10;
                            } else if (enemys[j].fn < 14) {
                                grade += 20;
                            } else {
                                grade += 30;
                            }


                            if (grade > 20000) {
                                bullet_draw = 2;
                                bulletspeed = 80;
                                enemy_draw = 2;
                                enemyspeed = 20;
                            } else if (grade > 10000) {
                                bullet_draw = 3;
                                bulletspeed = 60;
                                enemy_draw = 4;
                                enemyspeed = 10;
                            } else if (grade > 6000) {
                                bullet_draw = 5;
                                bulletspeed = 60;
                                enemy_draw = 8;
                                enemyspeed = 8;
                            } else if (grade > 2000) {
                                bullet_draw = 6;
                                bulletspeed = 50;
                                enemy_draw = 10;
                                enemyspeed = 6;
                            } else if (grade > 500) {
                                bullet_draw = 8;
                                bulletspeed = 40;
                                enemy_draw = 15;
                                enemyspeed = 5;
                            }


                            // 敌人爆炸音效
                            mus++;
                            if (mus > 4) {
                                mus = 0;
                            };
                            switch (mus){
                                case 0:
                                    if (mc_TF) {
                                        e1_mp3.play();
                                    }
                                    break;
                                case 1:
                                    if (mc_TF) {
                                        e2_mp3.play();
                                    }
                                    break;
                                case 2:
                                    if (mc_TF) {
                                        e3_mp3.play();
                                    }
                                    break;
                                case 3:
                                    if (mc_TF) {
                                        e4_mp3.play();
                                    }
                                    break;
                                case 4:
                                    if (mc_TF) {
                                        e5_mp3.play();
                                    }
                                    break;
                            }

                        };
                        
                        bullets.splice(i,1);
                        i--;
                        len--;
                        break;
                    };
                };  
            };
        };

        //敌机创建
        if (fps % enemy_draw == 0) {
            enemys.push(new Enemy()); 
        };
        // 敌机打印
        for (var i = 0,len = enemys.length; i < len; i++) {
            if (enemys[i].y > canvasHeight) {
                enemys.splice(i,1);
                i--;
                len--;
            } else {
                enemys[i].draw();

                //飞机和敌机的判断
                if (enemys[i].blood > 0 && plane.blood > 0 && p_crash(plane,enemys[i])) {
                    enemys[i].blood = 0;
                    plane.blood = 0;
                }
            }
        };

        //飞机和道具的判断
        for (var i = 0,len = props.length; i < len; i++) {
            if (plane.blood > 0 && crash(plane,props[i])) {
                if (props[i].fn == 0) {
                    plane.z = 1;
                    bullet_z = 0;
                }else if (props[i].fn == 1){
                    plane.o = 1;
                }

                props.splice(i,1);
                i--;
                len--;
            }
        };

        //子弹创建
        if (fps % bullet_draw == 0 && plane.blood > 0) {
            bullets.push(new Bullet());
        };
        // 子弹打印
        for (var i = 0,len = bullets.length; i < len; i++) {
            if (bullets[i].y < 0) {
                bullets.splice(i,1);
                i--;
                len--;
            } else {
                bullets[i].draw();
            }
        };

        //道具创建
        if (fps % props_draw == 0) {
            props.push(new Prop()); 
            props_draw = fnRand(300,1000);
        };
        // 道具打印
        for (var i = 0,len = props.length; i < len; i++) {
            if (props[i].y > canvasHeight) {
                props.splice(i,1);
                i--;
                len--;
            } else {
                props[i].draw();
            }
        };

        // 飞机打印
        plane.draw();

        // 分数打印
        ctx.drawImage(imgfenshu_bg, 0, 0, 132, 141, canvasWidth - 160, 50, 132, 141);
        ctx.font = '32px Arial';
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(grade,canvasWidth - 93,125);

        if (plane.o == 1) {
            p_o++;
            if (p_o > 20) {
                p_o = 0;
            } else if (p_o < 16) {
                ctx.drawImage(imgprop2_e, 0, 0, 131, 128, canvasWidth - 131, canvasHeight - 158, 131, 128);
            }
            ctx.drawImage(imgprop2_ee, 0, 0, 92, 32, canvasWidth - 116, canvasHeight - 52, 92, 32);
        };

        if (plane.z == 1) {
            bullet_z++;
            if (bullet_z > 300) {
                plane.z = 0;
                bullet_z = 0;
            };
        };

    }
    // requestAnimationFrame(start);
    }
    // start();
    var timer = setInterval(function (){
        start();
    },30);

    // 游戏触摸移动事件
    var touchX = 0;
    var touchY = 0;
    var x = 0;
    var y = 0;
    var touchendX = 0;
    var touchendY = 0;
    canvas.addEventListener("touchstart", function (e){
        touchX = e.touches[0].pageX - plane.x;
        touchY = e.touches[0].pageY - plane.y;
        touchendX = e.touches[0].pageX;
        touchendY = e.touches[0].pageY;
        e.preventDefault();
    },false);

    canvas.addEventListener("touchmove", function (e){
        x = e.touches[0].pageX - touchX;
        y = e.touches[0].pageY - touchY;
        plane.x = x;
        plane.y = y;
        e.preventDefault();
    },false);

    canvas.addEventListener("touchend", function (e){
        if (plane.o == 1 && touchendX > (canvasWidth - 160) && touchendY > (canvasHeight - 160)) {

            if (mc_TF) {
                bomb_mp3.play();
            }

            for (var i = 0,len = enemys.length; i < len; i++) {
                if (enemys[i].blood != 0) {

                    enemys[i].blood = 0;

                    if (enemys[i].fn < 10) {
                        grade += 10;
                    } else if (enemys[i].fn < 14) {
                        grade += 20;
                    } else {
                        grade += 30;
                    }
                    
                };
            };
            plane.o = 0;    
        };
    },false);



    // 游戏结束页
    var over_to_arr = ["translate3d(-122px,0px,0px) scale3d(0.8,0.8,1)","translate3d(0px,0px,0px) scale3d(1,1,1)","translate3d(122px,0px,0px) scale3d(0.8,0.8,1)"];
    var over_to_first = $(".over_1");
    var over_to_s = $(".over_to_s");
    var over_co_s = $(".over_co_s");
    function over_to_s_fn(ts){
        var a = ts.index();
        var b = over_to_first.index();
        var c = ts.attr("_in")*1;
        if (a != b) {
            over_to_s.css("z-index","0");
            over_to_first.css({"-webkit-transform":over_to_arr[c],"z-index":"2","background-image":"url(./img/over_"+b+"_e.png)"}).attr("_in",c);
            over_to_first = ts;
            over_to_first.css({"-webkit-transform":over_to_arr[1],"z-index":"3","background-image":"url(./img/over_"+a+".png)"}).attr("_in",1);
            $(".over_co_s_e").removeClass("over_co_s_e");
            over_co_s.eq(a).addClass("over_co_s_e");
        }
    }
    // 排行榜点击事件
    $(".over_0").on("click",function (){
        over_to_s_fn($(".over_0"));
    });
    // 分数点击事件
    $(".over_1").on("click",function (){
        over_to_s_fn($(".over_1"));
    });
    // 众筹实况点击事件
    $(".over_2").on("click",function (){
        over_to_s_fn($(".over_2"));
    });


    // 重新开始
    $(".over_anniu_1").on("click",function (){
        if (mc_TF) {
            bomb_mp3.play();
        }

        for (var i = 0,len = enemys.length; i < len; i++) {
            if (enemys[i].blood != 0) {
                enemys[i].blood = 0;
            };
        };
        bullet_draw = 10;
        bulletspeed = 30;
        enemy_draw = 20;
        enemyspeed = 3;
        plane.x = canvasWidth*0.5-70,
        plane.y = canvasHeight*0.7,
        plane.o = 0;
        plane.z = 0;
        plane.blood = 1;
        plane.imgplaneX = 0;
        grade = 0;
        $(".over").removeClass("over_e");
    });

    // 邀请好友
    $(".over_anniu_2").on("click",function (){
        $(".fx").css("-webkit-transform","none");
    });
    // 关闭分享页
    $(".fx").on("click",function (){
        $(".fx").css("-webkit-transform","rotate(90deg)");
    });

    // 查看众筹款床垫
    $(".Jump").on("click",function (){
        $(".cp_box").css("-webkit-transform","none");
    });
    // 关闭众筹款床垫
    $(".cp_box").on("click",function (){
        $(".cp_box").css("-webkit-transform","rotate(-90deg)");
    });


    //全部点击事件结束




// by点击事件
$(".by").one('touchend',function (){
    bullet_mp3.play();
    bullet_mp3.pause();
    e1_mp3.play();
    e1_mp3.pause();
    e2_mp3.play();
    e2_mp3.pause();
    e3_mp3.play();
    e3_mp3.pause();
    e4_mp3.play();
    e4_mp3.pause();
    e5_mp3.play();
    e5_mp3.pause();
    bomb_mp3.play();
    bomb_mp3.pause();
    over_mp3.play();
    over_mp3.pause();
    bgmp3.play();
    if (mc_TF == false) {
        bgmp3.pause();
    }
});

// 内容滑动事件
$(".content").get(0).addEventListener("touchmove", function (e){
    e.preventDefault();
},false);
$(".story_box").get(0).addEventListener("touchmove", function (e){
    e.preventDefault();
},false);






// function GetQueryString(name){
//     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//     var r = window.location.search.substr(1).match(reg);
//     if(r!=null)return  unescape(r[2]); return 0;
// }


// var tiao = GetQueryString("z")*1;
// switch(tiao){
//     case 1:
//         break;
// }







});
//js结束