<?php

// this path should point to your configuration file.
include('database_config.php');
$table = "cnist_exp_settings";

$data_array = json_decode(file_get_contents('php://input'), true);
$idx = $data_array['idx'];

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /* Get all the values in this table */
    $stmt = $conn->prepare("SELECT * FROM `$table` WHERE idx=:id LIMIT 1");
    $stmt->execute(['id' => $idx]);

    $row = $stmt->fetch();

    echo json_encode($row);
}
catch(PDOException $e) {
    echo '{"success": false, "message": ' . $e->getMessage();
}
$conn = null;
?>