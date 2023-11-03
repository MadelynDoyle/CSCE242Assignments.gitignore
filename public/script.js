const express = require("express");
const app = express();

app.git('/',(req, res)=>{
    res.send("hello world");
});

app.listen(3000,() => {
    console.log("im listening");
});

