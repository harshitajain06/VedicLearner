import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <Button 
        title="Go to Lessons"
        onPress={() => navigation.navigate('Lessons')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCE9FE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#567396',
  },
});

export default HomePage;
