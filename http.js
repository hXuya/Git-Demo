const http = require('http');

const fs = require('fs');

const server = http.createServer((req,res)=> {

    console.log(req.url,req.method)

    const path = req.url

    if (path == "/"){
        fs.readFile("home.html", (err,data) =>{
            if(err) res.write(err.message)
            else res.end(data.toString())
        })
    }

    else if (path == "/profile"){
        fs.readFile("profile.html", (err,data) =>{
            if(err) res.write(err.message)
            else res.end(data.toString())
        })
    }

    else{
        res.end("<h1>Not Found</h1>")
    }


})



server.listen(3000, () => console.log("Server is up and running"))