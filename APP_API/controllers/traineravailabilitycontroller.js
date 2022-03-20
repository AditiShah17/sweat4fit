const mongoose = require("mongoose");
const trainerAvailibility = mongoose.model("Traineravailability");

//Add trainer availability
const trainerAvailabilityCreate = function (req, res) {
  trainerAvailibility.create(
    {
      available_id: req.body.available_id,
      trainer_id: req.body.trainer_id,
      day_id: req.body.day_id,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
    },
    (err, data) => {
      console.log("data= " + data);
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(data);
      }
    }
  );
};

//Get trainer Availability
const trainerAvailabilityList = function (req, res) {
  trainerAvailibility.find().exec(function (err, data) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json(data);
  });
};

//Update trainer Availibity
const trainerAvailabilityUpdate = function (req, res) {
  if (!req.params.availableid) {
    res.status(404).json({
      message: "Not found, id is required",
    });
    return;
  }
  trainerAvailibility.findById(req.params.availableid)
  .exec((err, data) => {
    if (!data) {
      res.status(404).json({
        message: "id not found",
      });
      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }
      data.available_id = req.body.available_id;
      data.trainer_id = req.body.trainer_id;
      data.day_id = req.body.day_id;
      data.start_time = req.body.start_time;
      data.end_time = req.body.end_time;
      data.save((err, data) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(data);
      }
    });
  });
};

module.exports = {
  trainerAvailabilityCreate,
  trainerAvailabilityList,
  trainerAvailabilityUpdate
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

// module.exports.booksCreate =  function(req, res){
//     res
//     .status(200)
//     .json({
//         "status": "success"
//     });
// }
