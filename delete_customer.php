<?php
include 'db.php';

$id = intval($_GET['id']);

$stmt = $conn->prepare("DELETE FROM customers WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$stmt->close();
$conn->close();
?>
