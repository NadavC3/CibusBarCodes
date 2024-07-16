import React, { useState } from 'react';
import { View,KeyboardAvoidingView, ScrollView } from 'react-native';
import LoginPageTitle from '../components/Login/LoginPageTitle';
import LoginDetails from '../components/Login/LoginDetails';
import loginStyles  from '../styles/LoginStyles';
import RegisterButton from '../components/Login/RegisterButton';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


      return (
        <KeyboardAvoidingView style={loginStyles.scrollContainer} behavior="padding" enabled   keyboardVerticalOffset={100}>
        <ScrollView>
        <View 
            style={loginStyles.container}>
                <LoginPageTitle/>
                <LoginDetails
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <RegisterButton/>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      );
}
export default Login;