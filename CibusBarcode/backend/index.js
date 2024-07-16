const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const crypto = require('crypto');
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config(); // Load environment variables from .env file


const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");


const connectionString = process.env.MONGODB_CONNECTION_STRING;


// // Keep-alive endpoint
// const jobObject = require('./cron.js');
// const job = jobObject.job; // Access the 'job' property from the exported object
// job.start();



const Coupon = require("./Schemas/coupon");
const User = require("./Schemas/user");



// mongoose.connect(connectionString, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((error)=> {
    console.error('Error connecting to MongoDB:', error)
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});






// Hash password and generate a random salt
const hashPassword = async (password) => {
   // Generate a random salt
  const salt = crypto.randomBytes(16).toString('hex');

  // Hash the password with the generated salt
  const hashedPassword = crypto
  .createHash('sha256')
  .update(password + salt)
  .digest('hex');
  return { hashedPassword, salt };
}







app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:"username or password are required"})
    }
    User.findOne({username}).then((user)=> {
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
         // Retrieve hashed password and salt from the database based on the provided username
        const storedHashedPassword = user.password;

        // Combine the received password from the login screen, with the stored salt
        const saltedPassword = password + user.salt;

         // Hash the combined password and salt
         const hashedPassword = crypto
            .createHash('sha256')
            .update(saltedPassword)
            .digest('hex');

        if(hashedPassword !== storedHashedPassword){
            return res.status(401).json({message:"wrong password"})
        }
        //const token = createToken(user._id);
        return res.status(200).json({message:"Login successfully"})
    }).catch((error) => {
        console.log("error finding user",error);
        return res.status(500).json({message:"server error"})
    })

});



app.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    const { hashedPassword, salt } = await hashPassword(password);
  
    const newUser = new User({
        username: username,
        password: hashedPassword,
        salt: salt,
        email: email,
    });
  
     // Check if the username or email is already in use
     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  
     if (existingUser) {
      let message;
      
      if (existingUser.username === username) {
        message = "Existing Username";
      } else {
        message = "Existing Email";
      }
    
      return res.status(400).json({ message });
    }

    newUser.save().then(() => {
        res.status(200).json({ message: "Registered user" });
    }).catch((error) => {
        console.log("error registering", error);
        res.status(500).json({ message: "Registration error" });
    });
  });
