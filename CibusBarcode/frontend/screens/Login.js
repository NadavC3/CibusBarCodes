import React, { useState, useEffect  } from 'react';
import { View,KeyboardAvoidingView, ScrollView } from 'react-native';
import LoginPageTitle from '../components/Login/LoginPageTitle';
import LoginDetails from '../components/Login/LoginDetails';
import loginStyles  from '../styles/LoginStyles';
import RegisterButton from '../components/Login/RegisterButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    //Check for remember login when entering screen
    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const storedUserId = await AsyncStorage.getItem('userId');
          if (storedUserId) {
            navigation.navigate('Tabs', { userId: storedUserId });
          }
        } catch (error) {
          console.error('Failed to retrieve user ID from storage', error);
        }
      };
  
      checkLoginStatus();
    }, [navigation]);

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
                    message={message}
                    setMessage={setMessage}
                />
                <RegisterButton/>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      );
}
export default Login;