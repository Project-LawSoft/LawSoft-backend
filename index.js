const express = require('express');
const server = express();




// initial API for testing
server.get('/', (req, res)=>{
    res.json({status: 'success'})
})




server.listen(8080, ()=>{
    console.log("Server Started")
})