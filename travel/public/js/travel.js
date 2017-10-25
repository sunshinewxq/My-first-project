var a = 0;
var Time;
function imgCha(){
    //                             逐渐         所有兄弟  使用定时器改变属性
    $("#big .con .pic img").eq(a).stop(true).fadeIn(200).siblings().hide();
    $("#big .con .list li").eq(a).addClass("hov").siblings().removeClass("hov");
};
$("#big .con .list li").hover(function(){a = $(this).index();imgCha();});
$("#big .con .but .right").click(function(){(a<6)?(a++):(a=0);imgCha();});
$("#big .con .but .left").click(function(){(a>0)?(a--):(a=6);imgCha();});
function auto(){
    Time = setInterval(function(){
        (a<6)?(a++):(a=0);imgCha();
    },3000);
};
auto();
$("#big .con").hover(function(){clearInterval(Time)},function(){auto()});

var lpj=$("#banner .list li .bk a");
var lpj_1=$("#banner .list li .box1 a");
var lpj_2=$("#banner .list li .box1 a div");
lpj.hover(function(){
    lpj_2.css("margin-top","0px");
    lpj_1.css({"border":"2px solid rgba(250,250,250,0)","width":"90px"});
} );
lpj.mouseleave(function(){
    lpj_2.css("margin-top","-30px");
    lpj_1.css({"border":"2px solid rgba(250,250,250,1)","width":"106px"});
} );