//async file 

let fs = require('fs');

fs.writeFile("demo.txt", "Welcome to file module", (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("Async File created");
    }
});


//sync file created

let fs1 = require('fs');

fs1.writeFileSync("syncFile1.txt", "Welcome to file module sync file");
console.log("Sync File created");



// Async read file
fs.readFile("demo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error in reading file");
    } else {
        console.log("async file data: ", data);
    }   
});

//sync read file

const data = fs1.readFileSync("syncFile1.txt", "utf-8");
console.log("sync file data: ", data);









