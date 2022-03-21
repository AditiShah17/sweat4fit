var express = require('express');
var router = express.Router();
var passport = require("passport");
var authUser = require('../middleware/authUser')

// Users routes and controllers
var ctrlUsers = require('../controllers/user');

router.post('/register',ctrlUsers.userRegister);

router.post('/login',ctrlUsers.userLogin);

router.post('/logout',ctrlUsers.userLogout);

router.get('/userprofile', authUser , ctrlUsers.userProfile); 


module.exports = router;
