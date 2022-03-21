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


module.exports = router;
