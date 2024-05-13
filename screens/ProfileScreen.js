import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Nom et Prénom:</Text>
                <Text style={styles.value}>John Doe</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>john.doe@example.com</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Téléphone:</Text>
                <Text style={styles.value}>123-456-7890</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Retour à l'accueil"
                    onPress={() => navigation.navigate('Accueil')}
                    color="#007bff"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#007bff',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#343a40',
    },
    value: {
        fontSize: 18,
        flex: 1,
        color: '#495057',
    },
    buttonContainer: {
        marginTop: 30,
        width: '80%',
    },
});

export default ProfileScreen;