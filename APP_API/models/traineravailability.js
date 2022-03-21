const mongoose = require('mongoose');
// const { Schema } = mongoose;

const trainerAvailabilitySchema = new mongoose.Schema({
    trainer_id : {
        type: Number
    },
    day_id : {
        type: Number
    },
    start_time : {
        type: String,
        required: true
        // default: Date.now
    },
    end_time : {
        type: String,
        required: true
        // default: Date.now
    }
});

//create indexes
module.exports = mongoose.model('Traineravailability', trainerAvailabilitySchema, 'available_time');



