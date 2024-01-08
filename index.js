const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const http = require("http");
var cors = require('cors');

const db = require('./config/db');
var mongoose = require('mongoose');
const apiRouter = require('./routers/api');
var bodyParser = require('body-parser');

const server = http.createServer(app);

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

mongoose.set("strictQuery", false);

mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

app.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log("SERVER RUNNING");
});