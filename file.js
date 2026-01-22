// ================================
// Import File System Module
// ================================
const fs = require("fs");

// ================================
// 1️⃣ ASYNC FILE CREATE / WRITE
// ================================
fs.writeFile("demo.txt", "Welcome to file module", (err) => {
  if (err) {
    console.log("Error creating async file");
  } else {
    console.log("Async File created");
  }
});

// ================================
// 2️⃣ SYNC FILE CREATE / WRITE
// ================================
fs.writeFileSync("syncFile1.txt", "Welcome to file module sync file");
console.log("Sync File created");

// ================================
// 3️⃣ ASYNC READ FILE
// ================================
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading async file");
  } else {
    console.log("Async file data:", data);
  }
});

// ================================
// 4️⃣ SYNC READ FILE
// ================================
const syncData = fs.readFileSync("syncFile1.txt", "utf-8");
console.log("Sync file data:", syncData);

// ================================
// 5️⃣ ASYNC APPEND FILE
// ================================
fs.appendFile("demo.txt", "\nThis is appended async data", (err) => {
  if (err) {
    console.log("Error in appending async file");
  } else {
    console.log("Async data appended");
  }
});

// ================================
// 6️⃣ SYNC APPEND FILE
// ================================
fs.appendFileSync("syncFile1.txt", "\nNew sync appended data");
console.log("Sync data appended");

// ================================
// 7️⃣ ASYNC RENAME FILE
// ================================
fs.rename("demo.txt", "asyncRenamed.txt", (err) => {
  if (err) {
    console.log("Error in renaming async file");
  } else {
    console.log("Async file renamed successfully");
  }
});

// ================================
// 8️⃣ SYNC RENAME FILE
// ================================
fs.renameSync("syncFile1.txt", "syncRenamed.txt");
console.log("Sync file renamed successfully");

// ================================
// 9️⃣ CREATE SECURE FILE (MODE)
// ================================
fs.writeFile(
  "secure.txt",
  "Private Data",
  { flag: "w", mode: 0o600 },
  () => {
    console.log("Secure file created");
  }
);

// =======================================================
// 🔬 FILE SYSTEM USING FLAGS AND MODES (LAB)
// =======================================================

// ================================
// 🔬 LAB 1: READ FILE USING r FLAG
// ================================
fs.readFile("read.txt", { flag: "r", encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("Error reading file using r flag");
  } else {
    console.log("LAB 1 Data:", data);
  }
});

// ================================
// 🔬 LAB 2: WRITE FILE USING w FLAG
// ================================
fs.writeFile("write.txt", "Hello World", { flag: "w" }, (err) => {
  if (err) {
    console.log("Error writing file using w flag");
  } else {
    console.log("LAB 2 File written");
  }
});

// ================================
// 🔬 LAB 3: APPEND FILE USING a FLAG
// ================================
fs.appendFile("write.txt", "\nLog entry", { flag: "a" }, (err) => {
  if (err) {
    console.log("Error appending file using a flag");
  } else {
    console.log("LAB 3 File appended");
  }
});


// =======================================================
// create a file using promises API
// const fsPromises = require('fs').promises;
async function createFile() {
    try {
        await fsPromises.writeFile('promiseFile.txt', 'This file is created using promises API');
        console.log('File created using promises API');
    } catch (err) {
        console.log('Error creating file using promises API:', err);
    } 
}
createFile();
// =======================================================
// read a file using promises API 
async function readFile() {
    try {
        const data =  await fsPromises.readFile('promiseFile.txt', 'utf-8');
        console.log('Data from promise file:', data);
    } catch (err) {
        console.log('Error reading file using promises API:', err);
    }   
}
readFile();
// or with util.promisify (Node.js v10+)
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);  
async function readWithPromisify() {
    try {
        const data = await readFilePromise('promiseFile.txt', 'utf-8');
        console.log('Data from promise file using util.promisify:', data);
    } catch (err) {
        console.log('Error reading file using util.promisify:', err);
    }   
}
readWithPromisify();
// =======================================================