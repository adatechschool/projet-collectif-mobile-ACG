import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffreDetailsScreen = ({ route }) => {
    // Récupérer les données de l'offre sélectionnée depuis les paramètres de navigation
    const { offre } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.offreTitre}>{offre.titre}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Entreprise:</Text>
                <Text style={styles.detail}>{offre.entreprise}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Lieu:</Text>
                <Text style={styles.detail}>{offre.lieu}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Date de publication:</Text>
                <Text style={styles.detail}>{offre.date_publication}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.detail}>{offre.description}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Compétences requises:</Text>
                <Text style={styles.detail}>{offre.competences}</Text>
            </View>
            {/* Ajoutez d'autres détails de l'offre ici si nécessaire */}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    offreTitre: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    infoContainer: {
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    detail: {
        fontSize: 18,
    },
});

export default OffreDetailsScreen;