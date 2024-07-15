import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeStyles  from '../styles/HomeStyles';


const Home = () => {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.text}>Welcome to the Home Page!</Text>
    </View>
  );
};



export default Home;
