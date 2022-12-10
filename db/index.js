const Sequelize = require('sequelize');
const {STRING, TEXT} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'localhost://postgres/wordOfTheDay');

const {dictionary} = require('./data')

const Dictionary = db.define('dictionary', {
    id:{
        type: STRING
    },
    word:{
        type: STRING
    },
    meaning: {
        type: TEXT
    },
    sentence:{
        type: TEXT
    }
})

const syncAndSeed = async () =>{
    try{
        await Promise.all(dictionary.map(word =>{
            Dictionary.create({
                word: dictionary.Word,
                meaning: dictionary.Meaning,
                
            })
        }))
    }
    catch(err){
        console.log(err);
    }
}