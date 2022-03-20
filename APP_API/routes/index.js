var express = require('express');
var router = express.Router();

//trainer availability controller
var ctrlTrainerAvailability = require('../controllers/traineravailabilitycontroller');
var ctrlFeedback = require('../controllers/feedbackcontroller');

//trainer availability
router.post('/addtraineravailability',ctrlTrainerAvailability.trainerAvailabilityCreate); //creating trainer availability
router.get('/gettraineravailability',ctrlTrainerAvailability.trainerAvailabilityList);  //getting a list trainer availability
router.put('/updatetraineravailability/:availableid', ctrlTrainerAvailability.trainerAvailabilityUpdate); // update trainer availability

//feedback
router.post('/addfeedback',ctrlFeedback.feedbackCreate); //creating feedback
router.get('/getfeedback',ctrlFeedback.feedbackList);  //getting feeedbacks
router.delete('/deletefeedback/:feedbackid', ctrlFeedback.feedbackDelete); // delete feedback

module.exports = router;