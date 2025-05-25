const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../../db/recipes', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    }
    else {
        console.log('Connected to the database');
    }
})