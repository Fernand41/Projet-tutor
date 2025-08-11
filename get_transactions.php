<?php
header('Content-Type: application/json');

try {
    $db = new PDO("mysql:host=localhost;dbname=bitcoin_education;charset=utf8", "root", "");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $type = $_GET['type'] ?? '';
    
    if ($type === 'buy') {
        $query = $db->query("SELECT * FROM buy_transactions ORDER BY created_at DESC");
    } elseif ($type === 'sell') {
        $query = $db->query("SELECT * FROM sell_transactions ORDER BY created_at DESC");
    } else {
        throw new Exception("Type de transaction non spécifié");
    }
    
    $transactions = $query->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'data' => $transactions
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}