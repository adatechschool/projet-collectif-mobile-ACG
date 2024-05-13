import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import offresData from '../data/offres.json';

const AccueilScreen = ({ navigation }) => {
    const [offres, setOffres] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setOffres(offresData.offres);
    }, []);

    const filteredOffres = offres.filter((offre) =>
        offre.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const goToProfileScreen = () => {
        navigation.navigate('Profil');
    };

    const goToOffreScreen = (offre) => {
        navigation.navigate('OffreScreen', { offre });
    };

    const renderOffreItem = ({ item }) => (
        <TouchableOpacity onPress={() => goToOffreScreen(item)}>
            <View style={styles.offreContainer}>
                <Text style={styles.offreTitre}>{item.titre}</Text>
                <Text style={styles.offreInfo}>{item.entreprise} - {item.lieu}</Text>
                <Text style={styles.offreInfo}>{item.date_publication}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/jobConnect.png')} style={styles.logo} />
                <Text style={styles.appName}>Job Connect</Text>
                <TouchableOpacity onPress={goToProfileScreen}>
                    <Text style={styles.profilLink}>Profil</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.searchBar}
                placeholder="Rechercher..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <FlatList
                data={filteredOffres}
                renderItem={renderOffreItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profilLink: {
        fontSize: 16,
        color: '#007bff',
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
    offreTitre: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    offreInfo: {
        fontSize: 16,
        color: '#555',
    },
});

export default AccueilScreen;