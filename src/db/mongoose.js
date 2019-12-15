/****
 * start mongo using
 * \Users\soumy\mongodb\bin\mongod.exe --dbpath=\Users\soumy\mongodb-data
*/

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/notes-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})