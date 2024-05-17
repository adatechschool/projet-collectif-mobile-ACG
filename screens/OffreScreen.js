import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import des icônes depuis Expo

const OffreDetailsScreen = ({ route }) => {
    // Récupérer les données de l'offre sélectionnée depuis les paramètres de navigation
    const { offre } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.offreTitre}>{offre.titre}</Text>
            <View style={styles.infoContainer}>
                <MaterialIcons name="business" size={24} color="#007bff" style={styles.icon} />
                <Text style={styles.detail}>{offre.entreprise}</Text>
                <MaterialIcons name="location-on" size={24} color="#007bff" style={[styles.icon, styles.locationIcon]} />
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
                {offre.competences.map((competence, index) => (
                    <Text key={index} style={styles.competence}>{competence}</Text>
                ))}
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
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
        color: '#007bff',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        flexWrap: 'wrap',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        color: '#343a40',
    },
    detail: {
        fontSize: 18,
        marginLeft: 5,
        color: '#495057',
    },
    competence: {
        fontSize: 16,
        marginLeft: 20,
        color: '#007bff',
    },
    icon: {
        marginRight: 5,
    },
    locationIcon: {
        marginTop: 2, // Ajustement pour aligner la localisation avec le texte
    },
});

export default OffreDetailsScreen;