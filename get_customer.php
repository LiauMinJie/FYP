<?php
include 'db.php';

$result = $conn->query("SELECT * FROM customers");
$customers = [];

while ($row = $result->fetch_assoc()) {
    $customers[] = $row;
}

echo json_encode($customers);
$conn->close();
?>
