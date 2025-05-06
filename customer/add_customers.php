<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];

$sql = "INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $phone, $address);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Customer added successfully.";
} else {
    echo "Failed to add customer.";
}

$stmt->close();
$conn->close();
?>
