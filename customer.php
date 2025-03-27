<?php
// 数据库连接设置
$servername = "localhost";  // 数据库主机
$username = "root";         // 数据库用户名
$password = "";             // 数据库密码
$dbname = "admin";          // 数据库名称

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 检查表单是否提交
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // 使用预处理语句防止SQL注入
    $stmt = $conn->prepare("INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $address); // 绑定参数

    if ($stmt->execute()) {
        echo "New customer added successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // 关闭语句
    $stmt->close();
}

// 关闭数据库连接
$conn->close();
?>
