// create basic server
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8080;

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
})

// create array variables to hold data
const table = [
    {
        name: "Nani",
        phone: "555-555-5555"
    },
    {
        name: "Ahmed",
        phone: "555-555-1234"
    }
];
const waitlist = [
    {
        name: "Richard",
        phone: "567-456-8787"
    }
];

let tableNo = 5;

// create routes to get and post table data
app.get('/', (req, res) => {
    /* tableNo -= table.length;
    console.log(tableNo); */
    res.render('index', {tableNo: tableNo - table.length});
});

app.get('/tables', (req, res) => {
    res.render('tables', {
        tableArray: table,
        waitlistArray: waitlist
    });
});



// create routes to display html pages

// use jQuery to run ajax calls to get and post data to express server

