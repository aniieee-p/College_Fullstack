const http = require('node:http');

const hostname = '127.0.0.1';
const port = 5012;

const serverani = http.createServer((req, res) =>{

    res.setHeader('Content-Type', 'text/plain');

    if(req.url === '/'){
        res.write('This is my  main home page. \n');
    }else if (req.url === 'about_us'){
        res.write('this is about us page\n');
    }else if (req.url === 'contact'){
        res.write('this is my contact us page\n');
    }else{
        res.write('404 page not found\n');
    }
    res.end();
    

});

serverani.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})



