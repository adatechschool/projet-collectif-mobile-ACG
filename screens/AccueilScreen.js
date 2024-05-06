import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Importez les données d'offres depuis votre fichier JSON
import offresData from '../data/offres.json';

const AccueilScreen = ({ navigation }) => {
    // État local pour stocker les données des offres et le terme de recherche
    const [offres, setOffres] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Utilisez useEffect pour charger les données au montage du composant
    useEffect(() => {
        setOffres(offresData.offres); // Chargez les données depuis le fichier JSON
    }, []);

    // Filtrer les offres en fonction du terme de recherche
    const filteredOffres = offres.filter((offre) =>
        offre.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fonction pour naviguer vers le profil
    const goToProfileScreen = () => {
        navigation.navigate('Profil'); // Nom de la route vers la page de profil
    };
    const goToOffreScreen = (offre) => {
        navigation.navigate('OffreScreen', { offre }); // Nom de la route vers la page de détails de l'offre
    };

    // Fonction pour rendre chaque élément de la liste d'offres
    const renderOffreItem = ({ item }) => (
        <View style={styles.offreContainer}>
            <View style={styles.offreItem}>
                <Text style={styles.offreTitre}>{item.titre}</Text>
                <Text>{item.entreprise}</Text>
                <Text>{item.lieu}</Text>
                <Text>{item.date_publication}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* En-tête */}
            <View style={styles.header}>
                <Image source={require('../assets/jobConnect.png')} style={styles.logo} />
                <Text style={styles.appName}>Job Connect</Text>
                {/* Lien vers le profil */}
                <TouchableOpacity onPress={goToProfileScreen}>
                    <Text style={styles.profilLink}>Profil</Text>
                </TouchableOpacity>
            </View>

            {/* Barre de recherche */}
            <TextInput
                style={styles.searchBar}
                placeholder="Rechercher..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            {/* Liste des offres */}
            <FlatList
                data={filteredOffres}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => goToOffreScreen(item)}>
                        <View style={styles.offreContainer}>
                            <View style={styles.offreItem}>
                                <Text style={styles.offreTitre}>{item.titre}</Text>
                                <Text>{item.entreprise}</Text>
                                <Text>{item.lieu}</Text>
                                <Text>{item.date_publication}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Pour placer le texte "Profil" à droite
        marginBottom: 20,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    appName: {
        fontSize: 20,
    },
    profilLink: {
        fontSize: 16,
        color: 'blue',
    },
    searchBar: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    offreContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    offreItem: {
        // Styles pour le contenu de chaque offre
    },
    offreTitre: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
});

export default AccueilScreen;