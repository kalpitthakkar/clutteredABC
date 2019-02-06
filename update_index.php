<?php

// this path should point to your configuration file.
include('database_config.php');
$table = "cnist_exp_runid";
$data_array = json_decode(file_get_contents('php://input'), true);

$idx = $data_array['idx'];
$subid = $data_array['subid'];

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /* Get all the values in this table */
    $sql = "UPDATE `$table` SET state='completed',subject_id='$subid' where idx=$idx";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    echo '{"success": true, "message": ' . $stmt->rowCount() . ' records UPDATED successfully}';
}
catch(PDOException $e) {
    echo '{"success": false, "message": ' . $e->getMessage() . '}';
}
$conn = null;
?>