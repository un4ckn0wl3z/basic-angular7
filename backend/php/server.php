<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

$items = [
    array(
        'id' => 1001,
        'title' => 'Connect basic Angular 7 from php 01',
        'userId' => 101
    ),
    array(
        'id' => 1002,
        'title' => 'Connect basic Angular 7 from php 02',
        'userId' => 102
    ),
    array(
        'id' => 1003,
        'title' => 'Connect basic Angular 7 from php 03',
        'userId' => 103
    ),
    array(
        'id' => 1004,
        'title' => 'Connect basic Angular 7 from php 04',
        'userId' => 104
    ),
    array(
        'id' => 1005,
        'title' => 'Connect basic Angular 7 from php 05',
        'userId' => 105
    )
];

// print_r($items);

echo json_encode($items);

