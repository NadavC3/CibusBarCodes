import React, { useState }  from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform} from 'react-native';
import loginStyles  from '../../styles/LoginStyles';
import { handleLogin } from '../../controllers/LoginController';
import { useNavigation } from '@react-navigation/native';




const LoginDetails = ({ username, setUsername, password, setPassword, message, setMessage }) => {

  const navigation = useNavigation();
  const [isError, setIsError] = useState(false);


  const handlePress =  async() => {
    const loginSuccess = await handleLogin(username, password);
    if(loginSuccess)
      navigation.navigate('Tabs');

    else{
      setMessage("Login failed. Please try again.");
      setIsError(true);
      setTimeout(() => {
        setMessage("");
        setIsError(false);
      }, 3000);
    }
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
        {isError && message ? (
            <Text style={loginStyles.errorMessageText}>
              {message}
            </Text>
          ) : null}
      </TouchableOpacity>
    </View>
    );
  };
  
  export default LoginDetails;