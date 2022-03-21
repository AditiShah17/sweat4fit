//that we require mongoose in this file
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://admin:admin@sweat4fit.aim99.mongodb.net/sweat4fit?retryWrites=true&w=majority';
mongoose.connect(dbURI);

// connected , error ,diconnected are connection events

mongoose.connection.on('connected',function()
{
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err=>{
    console.log('Mongoose connection eror:',err);
});
mongoose.connection.on('disconnected',()=>{
    console.log("Mongoose disconnected");
});


const gracefulShutdown = (msg,callback)=>{
    mongoose.connection.close( ()=>{
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// nodemon changes
process.once('SIGUSR2',()=>{

    gracefulShutdown('nodemon restart',()=>{
        process.kill(process.pid,'SIGUSR2');
    });
});

// for app termination
process.on('SIGINT',()=>{
    gracefulShutdown('app termination',()=>{
        process.exit(0);
    });
});

// for heroku app termination
process.on('SIGTERM',()=>{
    gracefulShutdown('Heroku app termination',()=>{
        process.exit(0);
    });
});
require('./trainers');

require('./traineravailability');
require('./feedback'); // including the schema file.Hence, after connecting db we are telling to go to locationSchema file