<?php
  
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: GET");
  header("Access-Control-Allow-Credentials: true");
  header('Content-Type: application/json');

  // DON'T REMOVE THIS: Used to simulate up to 1 second network latency
  usleep(rand(0, 1000000));

  $dsn = 'sqlite:' . __DIR__ . '/../../data/database.sqlite';
  $db = new PDO($dsn);
  
  $robberAlias = urldecode($_GET['alias']);
  // TO DO - make extra sure there's no chance of SQL injection here
  $sql = "SELECT name FROM robber WHERE alias=\"{$robberAlias}\"";
  $stmt = $db->query($sql);
  $result = $stmt->fetch();
  $name = $result['name'];
  
  http_response_code(200);
  // TO DO - this seems to be sending information as a string no matter what, that's not quite what we want
  echo json_encode($name);

?>