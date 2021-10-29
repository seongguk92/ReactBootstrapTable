const express = require('express');

const bodyparser = require('body-parser');

const MultipartyMiddleware = multiparty({uploadDir:'./images'});
const morgan = require('morgan');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "Testing our Server"
    })
})

app.post('/uploads', MultipartyMiddleware, (req, res)=>{
    console.log("image upload");
})

app.listen(PORT, console.log(`Server has successfuly Started at : ${PORT}`));