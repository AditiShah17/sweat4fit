var express = require('express');
var router = express.Router();
var authUser = require('../middleware/authUser')
const multer = require('multer');

// upload file path
const FILE_PATH = 'public/uploads';

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${FILE_PATH}`);
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `/user-${file.fieldname}-${Date.now()}.${ext}`);
    },
});

const upload_files = multer({
    storage: multerStorage
});

// Users routes and controllers
var ctrlUsers = require('../controllers/user');

router.post('/register',ctrlUsers.userRegister);
router.post('/login',ctrlUsers.userLogin);
// router.post('/logout', authUser,  ctrlUsers.userLogout);
router.get('/userprofile', authUser , ctrlUsers.userProfile); 
router.put('/userprofile', authUser , ctrlUsers.userProfileUpdate); 
router.delete('/user', authUser , ctrlUsers.userDelete); 

router.post('/forgotPassword',ctrlUsers.forgotPassword);
router.get('/userFetch/:id', ctrlUsers.userFetch);
router.put('/reset-password', authUser, ctrlUsers.resetPassword);


// Trainer Routes and Controller
var ctrlTrainers = require('../controllers/trainer');

router
    .route('/trainers') // what request url is called
    .get( ctrlTrainers.trainersReadAll)
    .post(authUser, upload_files.array('document_file', 8), ctrlTrainers.trainerCreate);

router
    .route('/trainers/:trainerid')
    .get(authUser, ctrlTrainers.trainersReadOne)
    .put(authUser, ctrlTrainers.trainersUpdateOne)
    .delete(authUser, ctrlTrainers.trainersDeleteOne);


// presently working on this.    
router
    .route('/approveTrainer')
        .get(authUser, ctrlTrainers.checkPendingTrainers);
    
router
    .route('/approveTrainer/:trainerid')
        .put(authUser, ctrlTrainers.approveTrainerProfile);


//Availability Routes and Controller
var ctrlTrainerAvailability = require('../controllers/traineravailability');

router.post('/addtraineravailability',authUser, ctrlTrainerAvailability.trainerAvailabilityCreate); //creating trainer availability
router.get('/gettraineravailability/:trainerid',authUser, ctrlTrainerAvailability.trainerAvailabilityDetail);  //getting a list trainer availability
router.put('/updatetraineravailability/:availableid', authUser, ctrlTrainerAvailability.trainerAvailabilityUpdate); // update trainer availability
router.delete('/deletetraineravailability/:availableid',authUser, ctrlTrainerAvailability.trainerAvailabilityDelete); // delete feedback

//Feedback Routes and Controller
var ctrlFeedback = require('../controllers/feedback');

router.post('/addfeedback',authUser, ctrlFeedback.feedbackCreate); //creating feedback
router.get('/getfeedback/:trainerid',authUser, ctrlFeedback.feedbackList);  //getting feeedbacks
router.delete('/deletefeedback/:feedbackid', authUser, ctrlFeedback.feedbackDelete); // delete feedback

module.exports = router;