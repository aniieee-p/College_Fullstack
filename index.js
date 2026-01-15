const http = require('node:http');

const hostname = '127.0.0.1';
const port = 5012;

const serverani = http.createServer((req, res) =>{
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Node js\n');
});

serverani.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})


