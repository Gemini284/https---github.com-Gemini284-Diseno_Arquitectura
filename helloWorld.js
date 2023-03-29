const express = require("express");
const res = require("express/lib/response");

const app = express()

const port = 3000

app.get('/',(req, res) => {
    res.send ("Buenas tardes profesor")
})

app.listen(port,() =>{
    console.log(`SE VENDEN COLCHONES EN ${port}`)
})
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');