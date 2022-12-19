const Sequelize = require('sequelize');
const {STRING, TEXT, DATE} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/wordoftheday')

const {dictionary} = require('./data')

const Dictonary = db.define('dictionary', {
    id: {
        type: STRING,
        primaryKey: true,
    },
    word: {
        type: STRING
    },
    meaning: {
        type: TEXT
    },
    example: {
        type: STRING
    },
    date:{
        type: DATE
    }
})




const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})
        console.log('connected to db')
        await Promise.all(dictionary.map(singleWord =>{
            Dictonary.create({
                id: singleWord.id,
                word: singleWord.word,
                meaning: singleWord.meaning,
                example: singleWord.example,
                date: singleWord.date
            })
        }))
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    db,
    syncAndSeed,
    models: {
        Dictonary
    }
}