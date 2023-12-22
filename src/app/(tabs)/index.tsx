import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { useThemeColorStore } from '../../store/ThemeColorStore';

export default function TabOneScreen() {

  const {
    isDarkMode,
    toggleThemeColor,
  } = useThemeColorStore();

  const toggleTheme = () => {
    toggleThemeColor()
  };



  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? styles.darkContainer.backgroundColor : styles.lightContainer.backgroundColor }]}>
      <View style={styles.themeToggleContainer}>
        <Text style={[styles.themeText, { color: isDarkMode ? styles.darkThemeText.color : styles.lightThemeText.color }]}>
          Toggle Theme
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeText: {
    fontSize: 20,
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
