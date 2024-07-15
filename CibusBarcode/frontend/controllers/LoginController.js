import axios from 'axios';



const handleLogin = async (username, password) => {
    const user = {
        username: username,
        password: password,
    };

    try {
        // const res = await axios.post(`/login`, user);
        // const token = res.data.token;
        console.log("User logged in successfully");
        return true; 
    } catch (error) {
        console.error("Error during login:", error);
        return false;
    }
};

const handleRegister = () => {
    console.log("Register");
    // Implement logout logic here
};

const resetPassword = (email) => {
    console.log("Reset Password for:", email);
    // Implement password reset logic here
};

export { handleLogin, handleRegister, resetPassword };
