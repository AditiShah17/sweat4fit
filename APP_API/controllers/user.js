const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const _ = require('passport-local-mongoose');
const JWT_SECRET = 'sweat4FitAPI';
const fetch = require('node-fetch');


const mongoConfig = require('../models/db');
const connect = mongoConfig.connect;

let gfs;
var filePath;

const userId = function(id){
    const userid = id;
    filePath = "uploads/profile_image/"+ userid;
   
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
        bucketName: filePath
    });
}


const userLogin = async function(req, res){
 
    const email = req.body.email;
    console.log(email);
    let user = await User.findOne({email}) 
        
    if(!user)
    {
        res
        .status(400)
        .json({
            error: "Email invalid"
        });
        return;
    }
    else
    {
        const passwordCompare = await bcrypt.compare(req.body.password, user.password );
        if(!passwordCompare){
            res
            .status(404)
            .json({
                "Message": "Incorrect password"
            });
            return;
        }
        const data = {
            id: user.id
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        res
        .status(200)
        .json({
            token: authToken,
            Message: "Succesfully Login"
        });
    }
};

const userRegister = async function(req, res){

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            gender: req.body.gender,
            mobile_no: req.body.mobile_no,
            password: secPass,
            role_id: req.body.role_id
          }, (err, userdata) => {
            if (err) {
                res
                .status(400)
                .json(err);
                return;
            } else {

                // const data = {
                //     id: userdata.id
                // }

                // const authToken = jwt.sign(data, JWT_SECRET);

                res
                .status(201)
                .json({
                    // token: authToken,
                    user: userdata
                });
            }
        });
};

const userProfile = async function(req, res){

    // userId(req.user);
    // console.log(filePath);
    const baseUrl = "http://localhost:5000/api/userprofile/";

    const userid = req.user;
    console.log(userid);
    if(!userid) {
        res
        .status(404)
        .json({
            "message" : "Not found, userid is required"
        });
        return;
    }
    else
    {
        
    // gfs.find().toArray((err, files) => {
    //     console.log(files);
        
    //     files.map(file => {
    //         if (file.contentType === 'image/png' || file.contentType === 'image/jpeg' || file.contentType === 'image/jpg') {
    //             file.isFile = true;
    //         } else {
    //             file.isFile = false;
    //         }
    //     });  
   
        const user = User.findById(userid)
        .select("-password")
        .exec((err, userdata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            } else {
                // const image_filename = files[0].filename;
                // const content_type = files[0].contentType;
                res
                .status(200)
                .json({
                   user: userdata
                    // image: {
                    //     data: baseUrl + image_filename,
                    //     contentType: 'image/png'
                    });
            }
        });
    // }); 
    
    }
      
}

const userProfileUpdate = function(req, res){
   
    const userId = req.user;
    console.log(userId);
    if(!userId) {
        res
        .status(404)
        .json({
            "message" : "Not found, userid is required"
        });
        return;
    }else{

         User.findById(userId)
        .exec((err, userdata) => {

            if(!userdata){
                res
                .status(404)
                .json({
                    "message" : "userid is not found"
                });
                return;
            } else if(err) {
                res
                .status(404)
                .json(err);
                return;
            }else{
                const profile_image = req.file;
                
                userdata.firstname = req.body.firstname;
                userdata.lastname= req.body.lastname;
                userdata.gender = req.body.gender;
                userdata.mobile_no = req.body.mobile_no;
                userdata.save((err, userdata) => {
                        if(err){
                            res
                            .status(404)
                            .json(err);
                            return;
                        } else {
                            res
                            .status(200)
                            .json({
                                User: userdata,
                                Message: "Profile Image Uploaded"
                            });
                        }
                });
                
            }
        })
    }
};

const userDelete =  function(req, res){
    
    const userId = req.user;

    if(userId){
        User
        .findByIdAndRemove(userId)
        .exec ((err, userdata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
            res
            .status(200)
            .json({
                "message" : "User sucessfully deleted"
            });
        });
    } else {
        res
        .status(404)
        .json({
            "message" : "No userid"
        });
    }
}

// const userLogout =  function(req, res){
    
//     userId = req.user;

//     if(userId){
//         let payload = {_id: userId}
//         const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1d'})
//     }
    
// }

const forgotPassword = async function(req, res){
    //Generate and set password reset token
    const passwordgenerate = generatePasswordReset();
    console.log(passwordgenerate);

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(passwordgenerate, salt);


    const email = req.body.email;

     User.findOne({email}) 
    .exec((err, userdata) => {
        if(!userdata){
            res
            .status(404)
            .json({
                "message" : "Email invalid"
            });
            return;
        } else if(err) {
            res
            .status(404)
            .json(err);
            return;
        }
        console.log(userdata);

        userdata.password= secPass;
        userdata.save((err, userdata) => {

            // let link = "http://" + req.headers.host + "/api/auth/reset/" + user.resetPasswordToken;
            // const mailOptions = {
            //     to: email,
            //     from: process.env.FROM_EMAIL,
            //     subject: "Password change request",
            //     text: `Hi ${userdata.firstname} \n 
            // Please check your new Password. \n\n
            // ${passwordgenerate} \n\n
            // Please don't share and Login with this new password.\n`,
            // };

            // sgMail.send(mailOptions, (error, result) => {
                if (err) return res.status(500).json({message: err.message});

                res.status(200).json({
                    message: 'A reset email has been sent to ' + email + '.'});
            // });
        });
})
}

const generatePasswordReset = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_";
  
    for (var i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

const userFetch = function(req, res){
    
    const userId = req.params.id;

    User.findById(userId)
    .exec((err, userdata) => {
        res
        .json({
            password: userdata.password
        });       
    });
}

const resetPassword = async function(req, res){
    
    const userId = req.user;
    console.log(userId);

    const user = User.findById(userId);

    const url = 'http://localhost:5000/api/userFetch/'+userId;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if(!userId) {
        res
        .status(404)
        .json({
            "message" : "Not found, userid is required"
        });
        return;
    }

    const passwordCompare = await bcrypt.compare(req.body.old_password, result.password );

    const new_password = req.body.new_password;
    const confirm_new_password = req.body.confirm_new_password;

    if(new_password == confirm_new_password)
    {
        const salt = await bcrypt.genSalt(10);
        const secNewPass = await bcrypt.hash(req.body.new_password, salt);  
        
        
        user.exec((err, userdata) => {
            if(!userdata){
                res
                .status(404)
                .json({
                    "message" : "userid is not found"
                });
                return;
            } else if(err) {
                res
                .status(404)
                .json(err);
                return;
            }
    
    
            if(!passwordCompare){
                res
                .status(400)
                .json({
                    error: "Your Current password is Incorrect."
                });
                return;
            }
            else{
                userdata.password= secNewPass;
                userdata.save((err, userdata) => {
                    if(err){
                        res
                        .status(404)
                        .json(err);
                    } else {
                        res
                        .status(200)
                        .json({
                            'message': 'Your Password is Updated.'
                        });
                    }
                });
            }
    
        })  
    }
    else
    {
        res
        .status(401)
        .json({
            "message" : "Unauthorized: Password Not Match"
        });
        return;
    }
}



module.exports = {
    userId,
    userLogin,
    userRegister,
    userProfile,
    userProfileUpdate,
    userDelete,
    // userLogout,
    forgotPassword,
    resetPassword,
    generatePasswordReset,
    userFetch
};