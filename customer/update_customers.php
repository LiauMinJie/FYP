<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$address = $data['address'];

$sql = "UPDATE customers SET name=?, email=?, phone=?, address=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssi", $name, $email, $phone, $address, $id);
$stmt->execute();

echo "Updated";

$stmt->close();
$conn->close();
?>
