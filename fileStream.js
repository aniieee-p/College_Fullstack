const stream = require("stream");  //module import
const { Readable } = new require("stream"); //(string input) it is class of stream module and new keyword use to call object
//const { file Readable } = new require("stream"); //same as above line

const inStream = new Readable({  //class "Readable" 
    read() { }  //read method use to read data from stream object of Readable class
});

inStream.push("Welcome to sile_system class \n"); //push method use to add data  to stream
inStream.push("Data are there in the form of chunk"); //push method use to add data  to stream

inStream.push(null); //null means end of stream
inStream.pipe(process.stdout); //pipe method use to connect two streams , use to print data on console

