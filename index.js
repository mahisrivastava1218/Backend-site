const express= require('express')
const app= express()
app.get('/',(req,res)=>{
    res.send('hello you are in app')
})
app.listen(2000);