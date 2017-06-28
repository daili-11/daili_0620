<?php
header("Content-Type: text/html; charset=utf-8");
$sql = new mysqli("weixin.weitechs.com","root","gzjzl020","daily");
if(mysqli_connect_errno()){
echo "cnnect_errno";
exit;
}
$sql->query("set character set 'gbk'");
$sql->query('set names utf8');//设置操作数据库的编码格式
$query = "select * from daili_0616"; 

$result = $sql->query($query);

$num_results = $result->num_rows;//总页数
$cpage = isset($_GET["page"]) ? $_GET["page"] :1; //当前页

$num = 100; //每页的页数

// $url = "fen_ye.php";//每次请求你的页面

$offset=($cpage-1) * $num;//数据读取的位置

$pagenum = ceil($num_results/$num);//总页数

$query = "select * from daili_0616 limit {$offset},{$num}";//取数据

$result = $sql->query($query);

$num_results = $result->num_rows;

//每一页的的开始与结尾
$start = $offset + 1; 

$end=($cpage==$pagenum)? $num_results : ($cpage*$num); 
// 上一页 和 下一页

$next=($cpage==$pagenum)? 0 : ($cpage+1);//如果页面到了结尾 就返回0 就是不在下一页了

$prev=($cpage==1) ? 0 : ($cpage - 1);

for($i = 0; $i<$num_results;$i++){

$row = $result->fetch_assoc();

echo "<table align='center' width='400' border='1' cellspacing='0' cellpadding='0' border-spacing='0'>";

echo "<tr align='center' width='100'>";

// echo date('Y-m-d',time()).'<br>' 当前时间;
if ($row["time"]==0) {
  $time = '2016-12-5';
}else{
  $time = date('Y-m-d',$row["time"]).'<br>';
}
echo "<td width='50'>{$row["id"]}</td>"; 

echo "<td width='150'>{$row["phone"]}</td>"; 

echo "<td width='200'>{$time}</td>";

echo "</tr>";

echo "</table>"; 
}
echo "<table align='center' backgrouand='red' border-spacing='0' border-collapse='collapse'>";

echo "<tr>";

echo "<td>当前页总数:{$num_results}</td>";

echo "<td>本页条数:{$start}-{$end}</td>";

echo "<td>页面位置:{$cpage}/{$pagenum}</td>";

if($cpage == 1){

echo "<td>首页</td>";

}else{

echo "<td><a href='?page=1'>首页</a>;</td>";

}
if($prev){

echo "<td><a href ='?page={$prev}'>上一页</a></td>";

}else{

echo "<td>上一页</td>"; 

}
if($next){

echo "<td><a href='?page={$next}'>下一页</td>";

}else{

echo "<td>下一页</td>";

}
if($cpage == $pagenum){

echo "<td>尾页</td>";

}else{

echo "<td><a href='?page={$pagenum}'>尾页</td>";

}
echo "</tr>";
echo "</table>";

?>