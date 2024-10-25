import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LessonsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lessons Page</Text>
      <Button 
        title="Go to Track"
        onPress={() => navigation.navigate('Track')}
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

export default LessonsPage;
