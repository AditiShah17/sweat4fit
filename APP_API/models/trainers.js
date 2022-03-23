const mongoose = require('mongoose');

var trainerSchema = new mongoose.Schema(
    {
        user_id:
        {
            type:Number,
            required: true
        },
        approve: {
            type:String,
            enum:['yes,','no'],
            default:'no'
        },
        description:{
            type: String,
            required:[true,"Please provide description."]
        },
        skills:{
            type:[String],
            required:[true,"Atleast one skill is needed."],
        },
        experience:{
            type:Number,
            min:0
        },
        age:Number,
        document_file:String
    });

    mongoose.model('trainerModel',trainerSchema,'trainers');