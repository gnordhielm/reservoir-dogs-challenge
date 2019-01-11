<?php
  
  // header("Access-Control-Allow-Origin: *");
  // header("Access-Control-Allow-Headers: access");
  // header("Access-Control-Allow-Methods: GET");
  // header("Access-Control-Allow-Credentials: true");
  // header('Content-Type: application/json');

  // DON'T REMOVE THIS: Used to simulate up to 1 second network latency
  usleep(rand(0, 1000000));

  $dsn = 'sqlite:' . __DIR__ . '/../../data/database.sqlite';
  // $db = new PDO($dsn);
  // $robberAlias = $_GET['alias'];

  http_response_code(200);
  echo json_encode("HI");

?>