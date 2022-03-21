var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: [true, 'Please Enter Your Firstname']
    },
    lastname : {
        type: String,
        required: [true, 'Please Enter Your Lastname']
    },
    email : {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: [true, 'Email is already exists'],
    },
    gender : {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: [true, 'Please select gender']
    },
    mobile_no : {
        type: String,
        validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
          },
          required: [true, 'User phone number required']
    },
    password : {
        type: String,
        require: true
    },
    role_id : {
        type: Number
    },
    active_user : {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    createdDate : {
        type: String,
        default: Date.now
    }
});

module.exports =mongoose.model('User',userSchema,'users');
