const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'sweat4FitAPI';


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
    }
    else
    {
        const passwordCompare = await bcrypt.compare(req.body.password, user.password );
        if(!passwordCompare){
            res
            .status(400)
            .json({
                error: "Incorrect password"
            });
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
    try {
        userId = req.user;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res
        .status(500)
        .send("Internal Server Error");
    }
   
}

const userProfileUpdate = function(req, res){
    userId = req.user;
    console.log(userId);
    if(!userId) {
        res
        .status(404)
        .json({
            "message" : "Not found, userid is required"
        });
        return;
    }
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
        }
        userdata.firstname = req.body.firstname;
        userdata.lastname= req.body.lastname;
        userdata.gender = req.body.gender;
        userdata.mobile_no = req.body.mobile_no;
        userdata.save((err, userdata) => {
                if(err){
                    res
                    .status(404)
                    .json(err);
                } else {
                    res
                    .status(200)
                    .json(userdata);
                }
        });
        
    })
};

const userDelete =  function(req, res){
    
    userId = req.user;

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
            .status(204)
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

const userLogout =  function(req, res){
    req.logout();
    res.redirect("/");
}

module.exports = {
    userLogin,
    userRegister,
    userProfile,
    userProfileUpdate,
    userDelete,
    userLogout
};