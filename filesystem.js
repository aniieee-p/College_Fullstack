let fs = require("fs").promises;
let {promisify} = require("util");  //filesystemmodule
let Anisha = promisify(require("fs").readFile);


fs.writeFile("cb.txt",
    "this is simple call back file data",(error)=>{
        if(error){
            console.log("file is loading error", error);
        } else{
            console.log("File is created with simple call back");
        }
    });
// fs.readFile(()=>{

// })
async function readFileWithPromises(){
    try{
        let data = 
        await fs.readFile("cb.txt","utf-8");

        console.log(
            "Async file data with promises:", data);

    }catch(error){
        console.log(
            "Error is loading async file read error:", error);
    }
}
readFileWithPromises();

async function readFileWithPromisify() {
    try {
        let  fileData = await Anisha("cb.txt", "utf-8");
        console.log("Reading the file data with custom(promisyfy)", fileData);

    }catch (error) {
        console.log(error)

    }

    
}
readFileWithPromisify();


/////////////////////////////////////////////////
async function openfile(){
    try {
        const fileHandle = await fs.open("cb.txt", "r+");
        console.log("file opened successfully");

        await fileHandle.close();

    } catch (error) {
        console.log("error in opening file:", error);
    }
}
openfile();



