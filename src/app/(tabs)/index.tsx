import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';

interface LocationObject {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export default function TabOneScreen() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    // Função assíncrona para obter a permissão de localização e a localização atual
    const getLocation = async () => {
      try {
        // Solicitar permissão de localização
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permissão de localização não concedida');
          return;
        }

        // Obter a localização atual
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        console.error('Erro ao obter a localização:', error);
      }
    };

    // Chamar a função para obter a localização ao montar o componente
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Sua localização"
            description="Você está aqui!"
          />
        </MapView>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
