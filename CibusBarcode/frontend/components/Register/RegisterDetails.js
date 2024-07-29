import React, { useState }  from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {handleRegister} from '../../controllers/RegisterController'
import RegisterStyles from '../../styles/RegisterStyles';

const RegisterDetails = ({ username, setUsername, password, setPassword, email, setEmail, message, setMessage}) => {

    const navigation = useNavigation();
    const [isError, setIsError] = useState(false);



  const handlePress =  async() => {
    const result = await handleRegister(username, password, email);
    console.log("registerSuccess = ", result.success);
    
    setMessage(result.message);
    setIsError(!result.success);

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
      <TouchableOpacity style={RegisterStyles.button} onPress={handlePress}>
        <Text style={RegisterStyles.buttonText}>Register</Text>
      </TouchableOpacity>
      {message ? (
        <Text style={isError ? RegisterStyles.errorMessageText : RegisterStyles.successMessageText}>
          {message}
        </Text>
      ) : null}
    </View>
  );
};


export default RegisterDetails;
