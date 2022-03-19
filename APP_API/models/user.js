var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    // name: { type: String,
    //         required: true,
    //         min: 3
    // } ,
    // type: { type: String,
    //     required: true
    // }
});

mongoose.model('User',userSchema);