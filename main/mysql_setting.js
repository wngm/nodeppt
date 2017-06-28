

var mysql = require('mysql');
var pool =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'password',
    database:'cloud_school',
    charset:'utf8_general_ci',
    dateStrings:false,

})
pool.getConnection(function(err,connection) {
    // 使用连接
    connection.query( 'SELECT * FROM school_school', function(err, rows) {
        console.log(rows)
        console.log('arr1:'+rows[0])
        console.log('arr1:'+rows[0].name)
        // 使用连接执行查询
        connection.release();
        //连接不再使用，返回到连接池
    });
});
// connection.connect(function(err){
//     if(err){
//         console.error('error connecting:'+err.stack);
//         return
//     }else{
//         console.log('concected as id '+connection.threadId)
//     }
// });
//
// connection.end(function(err){
//     if(err){
//         console.error(err)
//     }else{
//         console.log('connection has ended')
//     }
// });
