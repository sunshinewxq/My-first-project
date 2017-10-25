//模态框
$("#portfolio").on("click","button",function(e){
    e.preventDefault();
    var $this=$(this);
    //查找src父元素的父元素的src
    var src = $this.parent().parent().prev().attr("src");
    $("#mo").css("display","block").children(":nth-child(2)").attr("src",`${src}`)
});
$("#close").on("click",function(e){
    $("#mo").css("display","none")
});
//导航条点击跳转
$(function(){
    var offset0 = $("#big").offset().top;
    var offset1 = $("#write").offset().top;
    var offset2 = $("#two").offset().top;
    var offset3 = $(".dict").offset().top;
    var offset4 = $(".me").offset().top;
    var offset5 = $("#footer").offset().top;
    $("#list").on("click","div.box",function(){
       var i = $(this).parent().index();
        switch(i){
            case 0:offset=offset0;
                break;
            case 1:offset=offset1;
                break;
            case 2:offset=offset2;
                break;
            case 3:offset=offset3;
                break;
            case 4:offset=offset4;
                break;
            case 5:offset=offset5;
        }
        $("body").animate({scrollTop:offset},500);
    });
})