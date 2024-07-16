import axios from 'axios';
import config from './config';

const handleRegister = async (username, password, email) => {
  try {
    const response = await axios.post(`${config.baseUrl}/register`, {
      username,
      password,
      email,
    });

    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

export {handleRegister};



