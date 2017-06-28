<?php
//连接数据库
  $conn = mysqli_connect("weixin.weitechs.com","root","gzjzl020","daily");//服务器：http://weixin.weitechs.com/phpmyadmin/
  $conn->query('set names utf8');//设置操作数据库的编码格式

  if (!$conn) {
    die("连接失败: " . $conn->connect_error);
  }
  // 获取用户提交的内容
  $phone = $_POST['phone'];
  //添加到数据库
  $sql = "SELECT * FROM daili_0616 WHERE phone='{$phone}'";
  $conn->query($sql);
  if (mysqli_affected_rows($conn)>0) {
    echo '{"error":"1","msg":"你已经报名了！"}';
    exit;
  }
  //添加到数据库
  $time = time();
  $sql = "INSERT INTO daili_0616 (phone,time) VALUES('{$phone}','{$time}')";
  $conn->query($sql);

  //判断是否添加成功
  if (mysqli_affected_rows($conn)>0) {
    echo '{"error":"0","msg":"你已成功报名！"}';
  }else{
    echo '{"error":"1","msg":"提交失败！"}';
  }
?>