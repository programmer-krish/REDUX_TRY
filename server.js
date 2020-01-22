const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const books = require('./routes/api/books');


const app = express();
//bodyParser   Middlewire
app.use(bodyParser.json());
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected....'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/books', books);    

//Setting the port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`) );