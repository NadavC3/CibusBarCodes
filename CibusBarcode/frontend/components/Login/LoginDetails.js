import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import loginStyles  from '../../styles/LoginStyles';
import {handleLogin} from '../../controllers/LoginController';
import { useNavigation } from '@react-navigation/native';




const LoginDetails = ({ username, setUsername, password, setPassword, }) => {

  const navigation = useNavigation();


  const handlePress =  async() => {
    const loginSuccess = await handleLogin(username, password);
    if(loginSuccess)
      navigation.navigate('Home');

  };

  return (
    <View style={loginStyles.infoFields}>
      <TextInput
        style={loginStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={loginStyles.button} onPress={handlePress}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    );
  };
  
  export default LoginDetails;