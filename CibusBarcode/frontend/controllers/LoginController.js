import axios from 'axios';
import config from './config';



const handleLogin = async (username, password) => {
    const user = {
        username: username,
        password: password,
    };

    try {
                  //await axios.get(`${config.baseUrl}/user`
        const res = await axios.post(`${config.baseUrl}/login`, user);
        //const token = res.data.token;
        console.log("User logged in successfully");
        return true; 
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
};


const resetPassword = (email) => {
    console.log("Reset Password for:", email);
    // 
};

export { handleLogin, resetPassword };
