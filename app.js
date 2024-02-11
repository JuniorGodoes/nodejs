const express = require("express");
const app = express();
const db = require('./Data/db');
const cors = require('cors');
const router = require("./Cotroller/router")
const bodyparser = require('body-parser');

const corsoption = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsoption))

app.use(bodyparser.json())
app.use(express.json());

app.use('/', router)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!');
});

app.listen(8000)
