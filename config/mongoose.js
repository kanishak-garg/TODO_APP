const mongoose = require('mongoose');

//'mongodb://localhost/todo_db'
const MONGODB_URL = process.env.DB_URL;
mongoose.connect(
    MONGODB_URL,
    { 
        useUnifiedTopology: true 
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function () {
    console.log('connected to db');
});