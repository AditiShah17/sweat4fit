const mongoose = require('mongoose');
const trainerModel = mongoose.model('trainerModel');




const trainersReadAll = function(req,res){

    res
        .status(200)
        .json({"status":"success"});
};
const trainersReadOne = function(req,res){

    if(req.params && req.params.trainerid)
    {
        trainerModel
        .findById(req.params.trainerid)
        //.select('decription skill')  if you want to show specific fields
        .exec((err,trainer)=>{     //trainer ---- The data which we are fetching from database. it is an object
            if(!trainer)
            {
                res
                    .status(404)
                    .json({"message":"trainer id is not found."});
                return;
            }
            else if(err)
            {
                res
                    .status(404)
                    .json(err)
                return;
            }
            else
            {
                res
                .status(200)
                .json(trainer) 
            }
          
        });
    }
    else
    {
        res
            .status(404)
            .json({
                "message":"No trainer id in request."
            })
    }

  
};
const trainersUpdateOne = function(req,res){
    res
        .status(200)
        .json({"status":"success"});
};
const trainersDeleteOne = function(req,res){
    res
        .status(200)
        .json({"status":"success"})
};



module.exports=
{
    trainersReadAll,
    trainersReadOne,
    trainersUpdateOne,
    trainersDeleteOne
}