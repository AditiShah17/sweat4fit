const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    trainer_id : {
        type: Number
    },
    trainee_id : {
        type: Number
    },
    rating : {
        type: Number,
        min: 0,
        max: 5
    },
    review : {
        type: String
    }
});

//create indexes
module.exports = mongoose.model('Feedbacks', feedbackSchema, 'feedbacks');



