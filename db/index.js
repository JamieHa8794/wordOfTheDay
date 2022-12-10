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
    examples:{
        type: TEXT
    }
})

const syncAndSeed = async () =>{
    try{
        await Promise.all(dictionary.map(word =>{
            Dictionary.create({
                word: dictionary.word,
                meaning: dictionary.meaning,
                example: dictionary.examples

            })
        }))
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    db,
    syncAndSeed,
    model: {
        Dictionary
    }
}