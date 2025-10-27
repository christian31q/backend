<?php
// --- Configurar CORS ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Procesar JSON recibido ---
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode(["error" => "No se recibieron datos válidos"]);
    exit();
}

// --- Simular respuesta ---
$response = [
    "mensaje" => "Datos recibidos correctamente",
    "data" => $input
];

echo json_encode($response);
?>