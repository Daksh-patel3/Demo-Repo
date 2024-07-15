require("dotenv").config()

const express = require("express");
const app = express();
const port = 4000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("dakshdotcom")
})

app.get("/login",(req,res)=>{
    res.send("please do login...")
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});