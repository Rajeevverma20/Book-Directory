const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080
const router = require('./route/bookRouter');

app.use(bodyParser.json());

app.use('/book',router);

app.listen(PORT,()=>{
    console.log(`listen port is ${PORT}`)
})


