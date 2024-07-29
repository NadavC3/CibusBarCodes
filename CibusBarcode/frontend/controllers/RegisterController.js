import axios from 'axios';
import config from './config';

const handleRegister = async (username, password, email) => {
  try {
    const response = await axios.post(`${config.baseUrl}/register`, {
      username,
      password,
      email,
    });

    console.log('Registration successful:', response.data.message);
    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // Return the error message from the server
      return { success: false, message: error.response.data.message };
    } else {
      // Return a generic error message
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  }
};

export {handleRegister};



