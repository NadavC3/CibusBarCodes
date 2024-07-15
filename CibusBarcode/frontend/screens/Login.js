import React, { useState } from 'react';
import { View, } from 'react-native';
import LoginPageTitle from '../components/Login/LoginPageTitle';
import LoginDetails from '../components/Login/LoginDetails';
import loginStyles  from '../styles/LoginStyles';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


      return (
        <View 
            style={loginStyles.container}>
                <LoginPageTitle/>
                <LoginDetails
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
        </View>
      );
}
export default Login;