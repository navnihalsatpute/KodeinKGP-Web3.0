require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Navnihal:Hello123%40@cluster0.cwal9ip.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection; 
db.on('error',(error) => console.log(error));
db.once('open', () => console.log('Connected to database!!'));

const quoteRouter = require('./routes/quote');
app.use('/', quoteRouter);

app.use('/', (req,res) => {
    res.send('hello world');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.listen(5050, () => console.log('Server started on port 5050'));