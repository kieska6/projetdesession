<?php
header("Access-Control-Allow-Origin: *"); // Permet les requêtes depuis n'importe quelle origine (pour le développement)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Connexion à la base de données (adaptez avec vos informations)
$servername = "localhost";
$username = "root"; // Utilisateur par défaut de XAMPP
$password = ""; // Mot de passe par défaut de XAMPP (vide)
$dbname = "projetdesession"; // Remplacez par le nom de votre DB

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}

// Récupérer les données POST
// Assurez-vous que les données sont envoyées en JSON depuis React
$data = json_decode(file_get_contents('php://input'), true);

// Vérifier si les données sont bien reçues
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
    exit();
}

$name = trim($data['name']);
$email = trim($data['email']);
$password = trim($data['password']);

// Validation simple côté serveur (vous pouvez ajouter plus de validation)
if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Please fill all fields']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email format']);
    exit();
}

// --- Détermination du rôle ---
$role = 'etudiant'; // Rôle par défaut
// Vérifie si l'email contient "@code3737" (insensible à la casse)
if (strpos(strtolower($email), '@code3737') !== false) {
    $role = 'admin';
}
// -----------------------------

// Vérifier si l'email existe déjà
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
if (!$stmt) {
     echo json_encode(['status' => 'error', 'message' => 'Prepare failed: (' . $conn->errno . ') ' . $conn->error]);
     exit();
}
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email already exists']);
    $stmt->close();
    $conn->close();
    exit();
}
$stmt->close();

// Hasher le mot de passe
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Préparer l'insertion (avec la colonne 'role')
$stmt = $conn->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
if (!$stmt) {
     echo json_encode(['status' => 'error', 'message' => 'Prepare failed: (' . $conn->errno . ') ' . $conn->error]);
     exit();
}
// Liaison des paramètres : s = string. Maintenant 4 strings (ssss)
$stmt->bind_param("ssss", $name, $email, $hashed_password, $role);

// Exécuter la requête
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Signup successful! Role assigned: ' . $role]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error during signup: ' . $stmt->error]);
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>