const { Writable } = require('stream');

const outStream = new Writable({
    write (chunk, encoding, callback) {
        console.log(chunk.toString());  // Log the chunk to the console
         callback();// Indicate that the write operation is complete
    }       
    //chunk - small piece of data 128gb , 
    //encoding - format of data utf-8
    //callback - function to call when write is complete

}); // Create a writable stream to 'output.txt'

process.stdin.pipe(outStream); // Pipe data from standard input to the writable stream

// in console u will see data whatever u type in terminal