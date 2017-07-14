var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' );
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});



module.exports=mongoose;