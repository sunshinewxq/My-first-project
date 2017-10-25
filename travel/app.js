//项目主程序
//1:加载相关模块 http express mysql qs
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const qs = require("querystring");
//2:创建连接池  25
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"ly",
  port:3306,
  connectionLimit:25
});
//3:创建express对象
var app = express();
//4:创建服务器对象
var server = http.createServer(app);
//5:绑定监听端口
server.listen(8081);
//6:处理所有静态文件
app.use(express.static("public"));

//模块一:用户注册
app.get("/new",(req,res)=>{
  //1:获取参数 req.query
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var email = req.query.email;
  var age = req.query.age;
  var phone = req.query.phone;
  var rd = req.query.rdate;
  //2:获取连接池中一个连接
  pool.getConnection((err,conn)=>{
    if(err)throw err;
    //3:创建SQL insert并且发送SQL
    var sql1 = "INSERT INTO touch VALUES(null,?,?)";
    conn.query(sql1,[uname,upwd],(err,result)=>{
        if(err)throw err;
        var uid = result.insertId;
        var sql2 = "INSERT INTO new VALUES(";sql2+= "null,?,?,?,?,?)";
        conn.query(sql2,[phone,email,age,rd,uid],(err,result)=>{
             if(err)throw err;
             res.json({code:1,"msg":"添加成功"});
             conn.release();
        });
    });
    //4:创建SQL INSERT并且发送SQL
    //5:成功 json {code:1,msg:"注册成功"};
  });
});

//用户登录
app.post("/touch",(req,res)=>{
  //获取参数
  req.on("data",(data)=>{
    var str = data.toString();
    var obj = qs.parse(str);
    //获取数据库连接
    pool.getConnection((err,conn)=>{
      if(err)throw err;
      //创建sql语句并发送
      var sql = "SELECT *FROM touch WHERE uname=? AND upwd=?";
      conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
        if(err) throw err;
        //返回数据并判断
        if(result.length<1){
          res.json({code:-1,msg:"用户名或密码不正确"});
        }else{
          res.json({code:1,"msg":"登录成功",uid:result[0].uid});
        }
        conn.release();
      });
    });
  });
});