<?php
    // Autoriser les requêtes depuis votre serveur de développement React (IMPORTANT pour CORS)
    header("Access-Control-Allow-Origin: http://localhost:3000"); // Adaptez le port si nécessaire
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // Gérer la requête OPTIONS (pré-vérification CORS)
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        exit(0);
    }

    // Connexion à la base de données
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "projetdesession";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(['message' => 'Erreur de connexion: ' . $conn->connect_error]);
        exit();
    }

    // Récupérer les données envoyées par React
    $input = json_decode(file_get_contents('php://input'), true);

    if (!isset($input['email']) || !isset($input['password'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Données manquantes']);
        exit();
    }

    $email = $input['email'];
    $password_attempt = $input['password'];

    // --- SÉCURITÉ : Utiliser des requêtes préparées ---
    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        // --- SÉCURITÉ : Vérifier le mot de passe hashé ---
        if (password_verify($password_attempt, $user['password'])) {
            // Mot de passe correct
            http_response_code(200);
            // Ne renvoyez JAMAIS le hash du mot de passe au client
            echo json_encode(['message' => 'Connexion réussie', 'user' => ['id' => $user['id'], 'name' => $user['name'], 'email' => $email]]);
            // Ici, vous pourriez générer un token JWT ou démarrer une session PHP
        } else {
            // Mot de passe incorrect
            http_response_code(401); // Unauthorized
            echo json_encode(['message' => 'Email ou mot de passe incorrect']);
        }
    } else {
        // Utilisateur non trouvé
        http_response_code(401); // Unauthorized
        echo json_encode(['message' => 'Email ou mot de passe incorrect']);
    }

    $stmt->close();
    $conn->close();
?>