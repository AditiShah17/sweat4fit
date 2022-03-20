const mongoose = require("mongoose");
const userFeedbacks = mongoose.model("Feedbacks");

//Add trainer availability
const feedbackCreate = function (req, res) {
  userFeedbacks.create(
    {
      feedback_id: req.body.feedback_id,
      trainer_id: req.body.trainer_id,
      trainee_id: req.body.trainee_id,
      rating: req.body.rating,
      review: req.body.review,
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
const feedbackList = function (req, res) {
  userFeedbacks.find().exec(function (err, data) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    res.status(200).json(data);
  });
};

//Delete trainer Availibity
const feedbackDelete = function (req, res) {
  //   const feedbackid = req.params.feedbackid;

  //   if (feedbackid) {
  //     userFeedbacks.findByIdAndRemove(feedbackid).exec((err, data) => {
  //       if (err) {
  //         res.status(404).json(err);
  //         return;
  //       }
  //       res.status(200).json({
  //         message: "Feedback Deleted",
  //       });
  //     });
  //   } else {
  //     res.status(404).json({ message: "Id not found" });
  //   }

  //   if (!req.params.feedbackid) {
  //     res.status(404).json({
  //       message: "Not found, id is required",
  //     });
  //     return;
  //   }
  userFeedbacks.findByIdAndRemove(req.params.feedbackid).exec((err, data) => {
    if (!data) {
      res.status(404).json({
        message: "id not found",
      });
      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }
    res.status(200).json({
      message: "Feedback Deleted",
    });
  });
};

module.exports = {
  feedbackCreate,
  feedbackList,
  feedbackDelete,
  //   trainerAvailabilityUpdate,
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
