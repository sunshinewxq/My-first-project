//完成用户登录
//获取提交用户登录信息按钮
$("#btn").click(function(){
    //alert(2);
    //获取用户名，密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    //发送AJAX请求
    $.ajax({
        type:"POST",
        url:"/touch",
        data:{uname:u,upwd:p},
        success:function(data){
            console.log(data);
            //获取服务器返回数据
            //如果返回信息code ==-1登录失败 显示出错信息
            if(data.code==-1){
                alert("登录失败")
            }else if(data.code==1){
            //如果返回信息code ==1 登录成功 跳转主界面
                location.href ="单身路途.html";
            }
            },
        error:function(){
            alert("网络故障，请重试");
        }
    });
});
