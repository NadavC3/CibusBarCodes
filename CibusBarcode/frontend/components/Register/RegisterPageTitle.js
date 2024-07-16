import React from 'react';
import { View, Text, Image } from 'react-native';
import RegisterStyles  from '../../styles/LoginStyles';

const RegisterPageTitle = () => {
  return (
    
    <View style={RegisterStyles.titleContainer}>
      <Image
        style={RegisterStyles.registerTitle} 
        source={require('../../assets/Register.png')}  
      />
    </View>
  );
};




export default RegisterPageTitle;