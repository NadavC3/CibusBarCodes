import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import RegisterDetails from '../components/Register/RegisterDetails';
import RegisterStyles from '../styles/RegisterStyles';
import RegisterPageTitle from '../components/Register/RegisterPageTitle';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');




  return (
    <KeyboardAvoidingView style={RegisterStyles.scrollContainer} behavior="padding" enabled   keyboardVerticalOffset={100}>
    <ScrollView>
    <View style={RegisterStyles.container}>
      <RegisterPageTitle/>
      <RegisterDetails
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        message={message}
        setMessage={setMessage}

      />
      
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
