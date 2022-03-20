const mongoose = require("mongoose");
const trainerAvailibility = mongoose.model('Traineravailability');
// const Movie = mongoose.model('Movie');

// const User = mongoose.model('User');

const trainerCreate = function (req, res) {

  trainerAvailibility.create({
    available_id: req.body.available_id,
    trainer_id: req.body.trainer_id,
    day_id: req.body.day_id,
    start_time: req.body.start_time,
    end_time: req.body.end_time
}, (err, data) => {
    console.log("data= " + data);
    if (err) {
        res.status(400)
            .json(err);
    } else {
        res.status(201)
            .json(data);
    }
});
}

const trainerList = function (req, res) {
  res.status(200).json({
    status: "List of trainers",
  });
};

module.exports = {
    trainerCreate,
    trainerList
};


// module.exports.booksLists =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }

// module.exports.booksReadOne =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }

// module.exports.booksDeleteOne =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }

// module.exports.booksUpdateOne =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }

// module.exports.booksCreate =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }
