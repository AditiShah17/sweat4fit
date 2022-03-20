const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    available_id : {
        type: Number
    },
    trainer_id : {
        type: Number
    },
    day_id : {
        type: Number
    },
    start_time : {
        type: String,
        default: Date.now
    },
    end_time : {
        type: String,
        default: Date.now
    }
});

//create indexes
module.exports = mongoose.model('Traineravailability', userSchema, 'available_time');



