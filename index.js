const express = require('express');
const app = express();


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Run Successfully Server.....!!!!!!!');
})

app.use(express.json()); //For convert body data into json formate

app.use('/', require('./Routes'));


