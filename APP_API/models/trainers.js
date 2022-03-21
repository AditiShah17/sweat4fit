const mongoose = require('mongoose');

var trainerSchema = new mongoose.Schema(
    {
        user_id:
        {
            type:Number,
            required: true
        },
        approve: String,
        description:{
            type: String,
            required:true
        },
        skills:{
            type:[String],
            required:true,
        },
        experience:{
            type:Number,
            min:0
        },
        age:Number,
        document_file:String
    });

    mongoose.model('trainerModel',trainerSchema,'trainers');