// RegisterButton.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles  from '../../styles/LoginStyles';


const RegisterButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Register');
  };

  return (
    <TouchableOpacity style={loginStyles.registerButton} onPress={handlePress}>
      <Text style={loginStyles.registerButtonText}>Register</Text>
    </TouchableOpacity>
  );
};


export default RegisterButton;
