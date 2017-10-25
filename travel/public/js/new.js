//用户注册
$("#bt-register").click(function(){
    var uname = $("#uname").val();
    var upwd = $("#upwd").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var age = $("#age").val();
    var rdate = $("#rdate").val();
    //alert(uname+upwd+email+phone+age+rdate);
    $.ajax({
        type:"GET",
        url:"/new",
        data:{
            uname:uname,
            upwd:upwd,
            email:email,
            phone:phone,
            age:age,
            rdate:rdate},
        success:function(data){
            if(data.code>0){
                alert("注册成功，2s后跳转登录");
                setTimeout(function(){
                    location.href = "touch.html";
                },2000);
            }
        },
        err:function(){alert("网络故障，请检查!")}
    });
});