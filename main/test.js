var mysql      = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'cloud_school',
    dateStrings:false,
    });
connection.query('SELECT * FROM school_school', function(err, rows) {
    // connected! (unless `err` is set)
    console.log(err)
    console.dir(rows)
    console.dir(typeof rows)

});
