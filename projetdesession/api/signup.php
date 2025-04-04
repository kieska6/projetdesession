<?php
// Autoriser les requêtes depuis votre serveur de développement React (IMPORTANT pour CORS)
header("Access-Control-Allow-Origin: http://localhost:3000"); // Adaptez le port si nécessaire
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Gérer la requête OPTIONS (pré-vérification CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Connexion à la base de données (Adaptez avec vos identifiants)
$servername = "localhost";
$username = "root"; // Utilisateur par défaut de XAMPP
$password = ""; // Mot de passe par défaut de XAMPP (souvent vide)
$dbname = "projetdesession";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    // En cas d'erreur de connexion, renvoyer une erreur HTTP
    http_response_code(500);
    echo json_encode(['message' => 'Erreur de connexion à la base de données: ' . $conn->connect_error]);
    exit();
}

// Récupérer les données envoyées par React (supposons qu'elles sont en JSON)
$input = json_decode(file_get_contents('php://input'), true);

// Vérifier si les données nécessaires sont présentes
if (!isset($input['name']) || !isset($input['email']) || !isset($input['password'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['message' => 'Données manquantes']);
    exit();
}

$name = $input['name'];
$email = $input['email'];
$password = $input['password']; // !! IMPORTANT: Hasher le mot de passe avant de le stocker

// --- SÉCURITÉ CRUCIALE : Hacher le mot de passe ---
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// --- SÉCURITÉ CRUCIALE : Utiliser des requêtes préparées pour éviter les injections SQL ---
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
// 'sss' signifie que les trois paramètres sont des chaînes (string)
$stmt->bind_param("sss", $name, $email, $hashed_password);

// Exécuter la requête
if ($stmt->execute()) {
    http_response_code(201); // Created
    echo json_encode(['message' => 'Utilisateur créé avec succès']);
} else {
    http_response_code(500); // Internal Server Error
    // Vérifier si l'erreur est due à un email dupliqué (contrainte UNIQUE)
    if ($conn->errno == 1062) { // Code d'erreur pour entrée dupliquée
         http_response_code(409); // Conflict
         echo json_encode(['message' => 'Cet email est déjà utilisé']);
    } else {
         echo json_encode(['message' => 'Erreur lors de la création de l\'utilisateur: ' . $stmt->error]);
    }
}

// Fermer la requête préparée et la connexion
$stmt->close();
$conn->close();
?>