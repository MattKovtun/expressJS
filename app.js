const bodyParser = require("body-parser");
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static(__dirname + '/frontend'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('combined'));


app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/api/data', (req, res) => {
    console.log("get");
    res.send("get data");
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(req);
    console.log(data);
    res.send("post data");
});


const listener = app.listen(3000, () => {
    console.log("Express server listening on port %d", listener.address().port)
});