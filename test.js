const http = require('http');


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end("here is our story")
    }
    res.end("Oops, not able to find this page")
})

server.listen(5000)
