import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OffreDetailsScreen = ({ route }) => {
    // Récupérer les données de l'offre sélectionnée depuis les paramètres de navigation
    const { offre } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.offreTitre}>{offre.titre}</Text>
            <Text>{offre.entreprise}</Text>
            <Text>{offre.lieu}</Text>
            <Text>{offre.date_publication}</Text>
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
        fontSize: 20,
        marginBottom: 10,
    },
});

export default OffreDetailsScreen;
