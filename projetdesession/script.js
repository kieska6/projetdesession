// Exemple de gestion de formulaire d'inscription
document.querySelector("#form-inscription").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    
    if (username && email) {
        alert("Inscription réussie!");
        // Code pour envoyer l'inscription au serveur
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
