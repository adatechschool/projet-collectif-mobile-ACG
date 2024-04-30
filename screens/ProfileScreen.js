import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button
                title="Retourner à l'accueil"
                onPress={() => navigation.navigate('Accueil')}
            />
        </View>
    );
};

export default ProfileScreen;