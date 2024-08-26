const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/getSecretData") {
        res.end("There is no secret Data");
    }
    res.end("Hello World");
});

server.listen(4000, () => {
    console.log("Server is running at port 4000");
});