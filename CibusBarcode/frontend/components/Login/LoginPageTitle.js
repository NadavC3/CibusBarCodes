import React from 'react';
import { View, Text, Image } from 'react-native';
import loginStyles  from '../../styles/LoginStyles';

const LoginPageTitle = () => {
  return (
    
    <View style={loginStyles.titleContainer}>
      <Image
        style={loginStyles.logo} 
        source={require('../../assets/cibusLogo.png')}  
      />
      <Text style={loginStyles.titleText}>Login</Text>
    </View>
  );
};




export default LoginPageTitle;