<?php
include 'db.php';

$id = $_GET['id'];
$sql = "DELETE FROM customers WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();

echo "Deleted";

$stmt->close();
$conn->close();
?>
