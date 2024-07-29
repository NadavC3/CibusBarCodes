import React, { useState }  from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform} from 'react-native';
import loginStyles  from '../../styles/LoginStyles';
import { handleLogin } from '../../controllers/LoginController';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const LoginDetails = ({ username, setUsername, password, setPassword, message, setMessage }) => {

  const navigation = useNavigation();
  const [isError, setIsError] = useState(false);


  const handlePress = async () => {
    try {
      const result = await handleLogin(username, password);
      if (result.userId) {
        await AsyncStorage.setItem('userId', result.userId);
        navigation.navigate('Tabs', { userId: result.userId });
      } else {
        setMessage(result.message || "Login failed. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
      setIsError(true);
    } finally {
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
      </TouchableOpacity>
      {isError && message ? (
        <Text style={loginStyles.errorMessageText}>
          {message}
        </Text>
      ) : null}
    </View>
  );
};
  
  export default LoginDetails;