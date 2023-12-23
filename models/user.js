const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter the name'],
        unique:true,
        lowercase: true,
        
    },
    password:{
        type:String,
        required:[true, 'Please enter a password'],
        required:true,
        minlength:[6, 'Password should be of length 6'],
        validate: {
            validator: function (value) {
                // Check if the password contains at least one capital letter and a special character
                return /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/.test(value);
            },
            message: 'Password must contain at least one capital letter and a special character',
        },
    },
});

const User = mongoose.model("user", userSchema)

module.exports = {
    User
}