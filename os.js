//mcq based questions on os module
//1. Which of the following methods from the 'os' module returns the operating system platform?
//a) os.type()
//b) os.platform()  //correct answer
//c) os.arch()
//d) os.release()   
//2. What does the os.arch() method return?
//a) The operating system's architecture (e.g., 'x64', 'arm')
//b) The CPU architecture of the system  //correct answer
//c) The amount of free system memory
//d) The hostname of the operating system   
//3. Which method would you use to get the total amount of system memory in bytes?
//a) os.totalmem()  //correct answer
//b) os.freemem()
//c) os.cpus()
//d) os.uptime()   
//4. How can you retrieve the hostname of the operating system using the 'os' module?   
//a) os.name()
//b) os.hostname()  //correct answer
//c) os.platform()  
//d) os.type()
//5. What information does the os.cpus() method provide?
//a) Details about each CPU/core installed, including model and speed  //correct answer
//b) The current CPU usage percentage
//c) The number of CPU cores only
//d) The operating system's architecture
//Answers:  

//1. b) os.platform()
//2. b) The CPU architecture of the system
//3. a) os.totalmem()
//4. b) os.hostname()
//5. a) Details about each CPU/core installed, including model and speed
//code snippet using os module to display platform and architecture

const { Console } = require("console");
const os = require("os");

console.log("Platform:", os.platform()); //win32
console.log("Architecture:", os.arch()); //x64
console.log("os.cpus():", os.cpus()); //[ { model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz', speed: 998, times: { user: 123456, nice: 0, sys: 23456, idle: 345678, irq: 0 } }, ... ]
console.log("Total Memory (bytes):", os.totalmem()); //17179869184 RAM MEEMORY IN YOUR SYSTEM in =======osbytes =======
console.log("used memory:", os.totalmem() - os.freemem()); //8599934592 USED MEMORY 
console.log("Free Memory (bytes):", os.freemem()); //8589934592 of ram memory free in your system
console.log("Hostname:", os.hostname()); //LAPTOP-EXAMPLE(your computer name)
console.log("Uptime (seconds):", os.uptime()); //3600 //system running time in seconds
console.log(os.homedir()); //C:\Users\Lenovo  
console.log(os.tmpdir()); //C:\Users\Lenovo\AppData\Local\Temp

//output:
//Platform: win32
//Architecture: x64
//os.cpus(): [ { model: 'Intel(R) Core(TM) i5-1035G1 CPU @ 1.00GHz', speed: 998, times: { user: 123456, nice: 0, sys: 23456, idle: 345678, irq: 0 } }, ... ]
//Total Memory (bytes): 17179869184
//Free Memory (bytes): 8589934592
//Hostname: LAPTOP-EXAMPLE
//Uptime (seconds): 3600
//code snippet using express to create a simple server with form submission