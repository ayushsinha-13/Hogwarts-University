const express = require("express");
const https =require("https");


const app = express()
app.use(express.static("public"))
app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}));


// Routes
const routes = require('./routes/route')
app.use(routes)

app.get('/',(req,res)=>res.render('index'))


app.listen(3000, function()
{
  console.log("Server is running in port 3000");
});
