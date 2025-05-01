<?php
$host = "localhost";
$user = "root";
$password = ""; // XAMPP 默认密码为空
$dbname = "my_admin_db"; // 用你自己的数据库名

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
}
?>
