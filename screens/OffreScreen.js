import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Importez les données d'offres depuis votre fichier JSON
import offresData from '../data/offres.json';

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