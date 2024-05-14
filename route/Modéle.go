package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Définition de la route
	http.HandleFunc("/", homeHandler)

	// Démarrage du serveur sur le port 8080
	fmt.Println("Serveur démarré sur le port :8080")
	http.ListenAndServe(":8080", nil)
}

// Handler pour la route "/"
func homeHandler(w http.ResponseWriter, r *http.Request) {
	// Écriture de la réponse
	fmt.Fprintf(w, "Bienvenue sur la page d'accueil !")
}
