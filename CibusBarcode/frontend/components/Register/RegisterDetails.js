import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {handleRegister} from '../../controllers/RegisterController'
import RegisterStyles from '../../styles/RegisterStyles';

const RegisterDetails = ({ username, setUsername, password, setPassword, email, setEmail, message, setMessage}) => {

    const navigation = useNavigation();
    const [isError, setIsError] = React.useState(false);



  const handlePress =  async() => {
    const registerSuccess = await handleRegister(username, password,email);
    if (registerSuccess){
      setMessage("Registration successful!");
      setIsError(false);
    }
    else{
      setMessage("Registration failed. Please try again.");
      setIsError(true);
    }
    setTimeout(() => {
      setMessage("");
    }, 3000);

  };
  return (

    <View style={RegisterStyles.infoFields}>
      <TextInput
        style={RegisterStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={RegisterStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={RegisterStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={RegisterStyles.button} onPress={handlePress} >
        <Text style={RegisterStyles.buttonText}>Register</Text>
        {message ? (
        <Text style={isError ? RegisterStyles.errorMessageText : RegisterStyles.successMessageText}>
          {message}
        </Text>
      ) : null}
      </TouchableOpacity>
    </View>

  );
};


export default RegisterDetails;
