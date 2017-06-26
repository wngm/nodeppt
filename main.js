var nodeppt=require('nodeppt');
var commander=require('commander');
var server=require('./lib/server');


var argvObj = {
    dir:'./md_lib/',
    port:'8080',
    controller:false,
    watch:'',
    host:'192.168.31.144',

};
server.start(8080,__dirname+'/md_lib/',argvObj.host,argvObj)
