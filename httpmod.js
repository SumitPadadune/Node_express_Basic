const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Wel  come to our Homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back Home </a>

    `)

    // res.write('Welcome to our home')
    // res.end()
})

server.listen(3000,()=>{
    console.log("hiieh");
});
