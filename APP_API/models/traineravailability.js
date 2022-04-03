const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const trainerAvailabilitySchema = new mongoose.Schema({
    trainer_id : { 
        type: Schema.Types.ObjectId, 
        ref:'User' 
    },
    day_id : {
        type: Schema.Types.ObjectId, 
        ref:'Days'
    },
    start_time : {
        type: String,
        // required: true
        // default: Date.now
    },
    end_time : {
        type: String,
        // required: true
        // default: Date.now
    }
});

//create indexes
module.exports = mongoose.model('Traineravailability', trainerAvailabilitySchema, 'available_time');



