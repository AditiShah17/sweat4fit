var express = require('express');
var router = express.Router();

// Users routes and controllers
var ctrlUsers = require('../controllers/user');


// router.get('/books',ctrlUsers.booksLists);  //getting a list
// router.get('/books/:bookid',ctrlBooks.booksReadOne);  //getting a single book
// router.delete('/books/:bookid',ctrlBooks.booksDeleteOne); //deleting
// router.put('/books/:bookid',ctrlBooks.booksUpdateOne); //updating
// router.post('/books',ctrlBooks.booksCreate); //creating


var ctrlAddTrainer = require('../controllers/traineravailability');
var ctrlGetTrainer = require('../controllers/traineravailability');

router.post('/addtraineravailabletime',ctrlAddTrainer.trainerCreate); //creating
router.get('/gettraineravailabletime',ctrlGetTrainer.trainerList);  //getting a list



module.exports = router;
