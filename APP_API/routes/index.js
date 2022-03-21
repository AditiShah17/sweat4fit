var express = require('express');
var router = express.Router();

// Users routes and controllers
var ctrlUsers = require('../controllers/user');

var ctrlTrainers = require('../controllers/trainer');

router
    .route('/trainers') // what request url is called
    .get(ctrlTrainers.trainersReadAll);

router
    .route('/trainers/:trainerid')
    .get(ctrlTrainers.trainersReadOne)
    .put(ctrlTrainers.trainersUpdateOne)
    .delete(ctrlTrainers.trainersDeleteOne);




//trainer availability controller
var ctrlTrainerAvailability = require('../controllers/traineravailabilitycontroller');
var ctrlFeedback = require('../controllers/feedbackcontroller');

//trainer availability
router.post('/addtraineravailability',ctrlTrainerAvailability.trainerAvailabilityCreate); //creating trainer availability
router.get('/gettraineravailability/:trainerid',ctrlTrainerAvailability.trainerAvailabilityList);  //getting a list trainer availability
router.put('/updatetraineravailability/:availableid', ctrlTrainerAvailability.trainerAvailabilityUpdate); // update trainer availability
router.delete('/deletetraineravailability/:availableid', ctrlTrainerAvailability.trainerAvailabilityDelete); // delete feedback

//feedback
router.post('/addfeedback',ctrlFeedback.feedbackCreate); //creating feedback
router.get('/getfeedback/:trainerid',ctrlFeedback.feedbackList);  //getting feeedbacks
router.delete('/deletefeedback/:feedbackid', ctrlFeedback.feedbackDelete); // delete feedback

module.exports = router;
