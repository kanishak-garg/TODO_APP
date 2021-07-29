const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://localhost/todo_db';
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