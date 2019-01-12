<?php

// simulate up to 1 second network latency
usleep(rand(0, 1000000));

$dsn = 'sqlite:' . __DIR__ . '/../../data/database.sqlite';
$db = new PDO($dsn);

$robberAlias = urldecode($_GET['alias']);
// TO DO - make extra sure there's no chance of SQL injection here
// https://stackoverflow.com/questions/5741187/sql-injection-that-gets-around-mysql-real-escape-string/12118602#12118602
$sql = "SELECT name FROM robber WHERE alias=\"{$robberAlias}\"";
$statement = $db->prepare($sql);
$statement->execute();
$result = $statement->fetch();
$name = $result['name'];
$json = json_encode($name);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

http_response_code(200);
echo $json;
