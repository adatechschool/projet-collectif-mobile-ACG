package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "Guillaume"
	password = "lorient56"
	dbname   = "emploie"
)

func connectDB() (*sql.DB, error) {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	fmt.Println("Connexion à la base de données réussie!")
	return db, nil
}
func main() {
	db, err := connectDB()
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM offresemploi")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// Traitez les résultats de la requête
	for rows.Next() {
		var id int
		var intitule_job string
		var nom_entreprise string
		var date string
		var lieu_ville string
		var description string
		var compétence string
		if err := rows.Scan(&id, &intitule_job, &nom_entreprise, &date, &lieu_ville, &description, &compétence); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("ID: %d, Intitulé du poste: %s, Nom de l'entreprise: %s, Date: %s, Lieu: %s, Description: %s, Compétences: %s\n", id, intitule_job, nom_entreprise, date, lieu_ville, description, compétence)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
}
