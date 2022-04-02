var express = require('express');
var router = express.Router();
var authUser = require('../middleware/authUser')
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const crypto = require('crypto');
var path = require('path');
const mongoConfig = require('../models/db');

// create storage engine
const storage = new GridFsStorage({
    url: mongoConfig.mongoURI,
    file: (req, file) => {
        userId = req.user;
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads/' + userId
                };
                resolve(fileInfo);
            });
        });
    }
});

// create storage engine
const profile_storage = new GridFsStorage({
    url: mongoConfig.mongoURI,
    file: (req, file) => {
        userId = req.user;
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads/profile_image/' + userId 
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload_files = multer({ storage: storage });

const profile_Image = multer({ storage: profile_storage });


// Users routes and controllers
var ctrlUsers = require('../controllers/user');

router.route('/register').post(ctrlUsers.userRegister);
router.post('/login',ctrlUsers.userLogin);
// router.post('/logout', authUser,  ctrlUsers.userLogout);

router
    .route('/userprofile') 
    .get( authUser , ctrlUsers.userProfile)
    .post( authUser , profile_Image.single('profileImage'), ctrlUsers.userProfileUpdate); 
router.delete('/user', authUser , ctrlUsers.userDelete); 

router.post('/forgotPassword',ctrlUsers.forgotPassword);
router.get('/userFetch/:id', ctrlUsers.userFetch);
router.put('/reset-password', authUser, ctrlUsers.resetPassword);


// Trainer Routes and Controller
var ctrlTrainers = require('../controllers/trainer');
// router.post('/trainerUser',authUser, ctrlTrainers.userid);
router
    .route('/trainers') // what request url is called
    .get(authUser, ctrlTrainers.trainersReadAll)
    .post(authUser, upload_files.array('document_file', 5), ctrlTrainers.trainerCreate);

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

router.route('/addtraineravailability').post(authUser, ctrlTrainerAvailability.trainerAvailabilityCreate); //creating trainer availability
router.route('/gettraineravailability').get(authUser, ctrlTrainerAvailability.trainerAvailabilityDetail);  //getting a list trainer availability
router.route('/updatetraineravailability/:availableid').put(authUser, ctrlTrainerAvailability.trainerAvailabilityUpdate); // update trainer availability
router.route('/deletetraineravailability/:availableid').delete(authUser, ctrlTrainerAvailability.trainerAvailabilityDelete); // delete feedback

//Feedback Routes and Controller
var ctrlFeedback = require('../controllers/feedback');

router.post('/addfeedback',authUser, ctrlFeedback.feedbackCreate); //creating feedback
router.get('/getfeedback/:trainerid',authUser, ctrlFeedback.feedbackList);  //getting feeedbacks
router.delete('/deletefeedback/:feedbackid', authUser, ctrlFeedback.feedbackDelete); // delete feedback

module.exports = router;