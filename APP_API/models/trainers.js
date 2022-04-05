const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainerSchema = new mongoose.Schema(
    {
        user_id:
        { 
            type: Schema.Types.ObjectId, 
            ref:'User' 
        },
        approve: {
            type:String,
            enum: ['Yes','No'],
            default:'No'
        },
        description:{
            type: String,
            // required:[true,"Please provide description."]
        },
        skills:{
            type:[String],
            // required:[true,"Atleast one skill is needed."],
        },
        experience:{
            type:String,
            min:0
        },
        age:{type: String},
        document_file: {type: String}
    },
    { timestamps: {createdAt:true, updatedAt:false} });

    mongoose.model('trainerModel',trainerSchema,'trainers');