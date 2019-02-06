<?php

// this path should point to your configuration file.
include('database_config.php');
$table = "cnist_exp_results";
$data_array = json_decode(file_get_contents('php://input'), true);
$filepath = "/media/kalpit/Kalpit/cnist_new_data/".$data_array['filename'].".csv"; 
$data = $data_array['filedata'];
// write the file to disk
file_put_contents($filepath, $data);

try {
  $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // First stage is to get all column names from the table and store
  // them in $col_names array.
  $stmt = $conn->prepare("SHOW COLUMNS FROM `$table`");
  $stmt->execute();
  $col_names = array();
  while($row = $stmt->fetchColumn()) {
    $col_names[] = $row;
  }
  // Second stage is to create prepared SQL statement using the column
  // names as a guide to what values might be in the JSON.
  // If a value is missing from a particular trial, then NULL is inserted
  $sql = "INSERT INTO $table VALUES(";
  for($i = 0; $i < count($col_names); $i++){
    $name = $col_names[$i];
    $sql .= ":$name";
    if($i != count($col_names)-1){
      $sql .= ", ";
    }
  }
  $sql .= ");";
  $insertstmt = $conn->prepare($sql);
  $subjectid = $col_names[0];
  $insertstmt->bindValue(":$subjectid", $data_array[$subjectid]);
  $responsefile = $col_names[1];
  $insertstmt->bindValue(":$responsefile", $filepath);
  $timestamp = date("Y-m-d H:i:s");
  $insertstmt->bindValue(":$col_names[2]", $timestamp);
  $insertstmt->bindValue(":$col_names[3]", $data_array["hitId"]);
  $insertstmt->bindValue(":$col_names[4]", $data_array["workerId"]);
  $insertstmt->bindValue(":$col_names[5]", $data_array["assignId"]);
  $insertstmt->bindValue(":$col_names[6]", $data_array["turksub"]);
  $insertstmt->execute();
  echo '{"success": true}';
} catch(PDOException $e) {
  echo '{"success": false, "message": ' . $e->getMessage();
}
$conn = null;
?>
