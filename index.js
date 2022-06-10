const express = require('express');
const app = express();
const port = 38080;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:nxnmHZrz3hShia0d@bolierplate.6dtkx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')) 
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

