<?php

// this path should point to your configuration file.
include('database_config.php');
$table = "cnist_exp_runid";

try {
    $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /* Get all the values in this table */
    $stmt = $conn->prepare("SELECT idx, state FROM `$table`");
    $stmt->execute();

    $rows = array();
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if($row['state'] == 'incomplete') {
            $rows[] = $row;
        }
    }

    if(count($rows) > 0) {
        $idx = $rows[0]['idx'];
        $sql = "UPDATE `$table` SET state='in_progress' where idx=$idx";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        echo json_encode($rows[0]);
    }
    else {
        echo json_encode([]);
    }
}
catch(PDOException $e) {
    echo '{"success": false, "message": ' . $e->getMessage();
}
$conn = null;
?>