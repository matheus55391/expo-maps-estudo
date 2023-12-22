import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeColorStore } from '../store/ThemeColorStore';
import { useRouter } from 'expo-router';

export default function InitialScreen() {
    const { themeColor } = useThemeColorStore();
    const isDarkMode = themeColor === 'dark';
    const router = useRouter()
    const handleFollowPress = () => {
        router.push('/(tabs)');
    };

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? styles.darkContainer.backgroundColor : styles.lightContainer.backgroundColor }]}>
            <Text style={[styles.title, { color: isDarkMode ? styles.darkThemeText.color : styles.lightThemeText.color }]}>Bem-vindo ao App de Transporte</Text>

            <Text style={[styles.subtitle, { color: isDarkMode ? styles.darkThemeText.color : styles.lightThemeText.color }]}>
                Descubra uma nova forma de se locomover!
            </Text>

            <TouchableOpacity style={styles.followButton} onPress={handleFollowPress}>
                <Text style={styles.buttonText}>Seguir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    followButton: {
        backgroundColor: '#3498db',
        padding: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    lightContainer: {
        backgroundColor: '#f3f3f3',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#f3f3f3',
    },
});
