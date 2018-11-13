// set dependencies
const http = require('http');

// set ports 7000 and 7500
const PORT7000 = process.env.PORT || 7000;
const PORT7500 = process.env.PORT || 7500;

// setup array of quotes
const quote = [
    'quote 1',
    'quote 2',
    'quote 3'
];

// function to handle requests and responses - one for each port
const handlerequest7000 = (req, res) => {
    const i = Math.floor(Math.random() * quote.length);
    res.end(quote[i]);
}

const handlerequest7500 = (req, res) => {
    /* quote.forEach(item => {
        res.end(item);
        console.log(item);
    }); */
    res.end(quote[0], quote[1], quote[2]);
}

// establish server
const server7000 = http.createServer(handlerequest7000);
const server7500 = http.createServer(handlerequest7500);

// 2 listeners for each port
server7000.listen(PORT7000, () => {
    console.log(`Server listening on: http://localhost:${PORT7000}`);
});

server7500.listen(PORT7500, () => {
    console.log(`Server listening on: http://localhost:${PORT7500}`);
});