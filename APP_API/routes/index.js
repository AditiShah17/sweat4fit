var express = require('express');
var router = express.Router();
var passport = require("passport");
var authUser = require('../middleware/authUser')

// Users routes and controllers
var ctrlUsers = require('../controllers/user');

router.post('/register',ctrlUsers.userRegister);

router.post('/login',ctrlUsers.userLogin);
var ctrlTrainers = require('../controllers/trainer');

router
    .route('/trainers') // what request url is called
    .get(ctrlTrainers.trainersReadAll)
    .post(ctrlTrainers.trainerCreate);

router
    .route('/trainers/:trainerid')
    .get(ctrlTrainers.trainersReadOne)
    .put(ctrlTrainers.trainersUpdateOne)
    .delete(ctrlTrainers.trainersDeleteOne);


// presently working on this.    
router
    .route('/approveTrainer')
        .get(ctrlTrainers.checkPendingTrainers);
    
router
    .route('/approveTrainer/:trainerid')
        .put(ctrlTrainers.approveTrainerProfile);




router.post('/logout',ctrlUsers.userLogout);

router.get('/userprofile', authUser , ctrlUsers.userProfile); 
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
