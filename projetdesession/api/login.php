<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Connexion DB (identique à signup.php)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projetdesession";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}

// Récupérer les données POST (JSON)
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
    exit();
}

$email = trim($data['email']);
$password = trim($data['password']);

if (empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Please fill all fields']);
    exit();
}

// Préparer la sélection (inclure 'role' et d'autres infos utiles comme 'id', 'name')
$stmt = $conn->prepare("SELECT id, name, email, password, role FROM users WHERE email = ?");
if (!$stmt) {
     echo json_encode(['status' => 'error', 'message' => 'Prepare failed: (' . $conn->errno . ') ' . $conn->error]);
     exit();
}
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Vérifier le mot de passe
    if (password_verify($password, $user['password'])) {
        // Mot de passe correct - Renvoyer les infos utilisateur (sans le hash du mdp)
        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful',
            // Renvoyer un objet 'user' avec les infos nécessaires au frontend
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => $user['role'] // <-- Renvoyer le rôle !
            ]
        ]);
    } else {
        // Mot de passe incorrect
        echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
    }
} else {
    // Email non trouvé
    echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
}

$stmt->close();
$conn->close();
?>