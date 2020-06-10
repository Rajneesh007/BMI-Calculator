const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));


app.get('/' ,(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/' ,(req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight/(height*height);

    res.send(`The BMI is ${result} kg/m^2`);
})


app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
});