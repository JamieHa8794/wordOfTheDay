const express = require('express');
const app = express();

const {syncAndSeed, models: {Dictonary}} = require('./db/index')

const path = require('path')

app.use('public', express.static(path.join(__dirname, 'public')))
app.use('dist', express.static(path.join(__dirname, 'dist')))


// app.get('/', (req, res, next)=> res.sendFile('index.html'))

app.get('/', async (req, res, next)=>{
    try{
        res.send(
            await Dictonary.findAll()
        )
    }
    catch(err){
        console.log(err)
    }
})


const init = () =>{
    try{
        syncAndSeed();
        const port = process.env.PORT || 8080;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

init();