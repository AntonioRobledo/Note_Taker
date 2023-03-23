const express = require('express');
const path = require('path');
const fs = require('fs');
let db = require('./db/db.json');
const {uid} = require('uid');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Middleware for static file
app.use(express.static('public')); 

// Create Express.js routes for index.html and notes.html files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})
// Returns saved notes
app.get('/api/notes', (req, res) => {
    res.json(db)
})

app.post('/api/notes', (req, res) => {
    // This will only allow notes whose forms are filled
    if(req.body.title && req.body.text) {
    const userNote = {
        title: req.body.title,
        text: req.body.text,
        // uid creates a unique id to which each note item is addressable
        id: uid()
    }
    // Push will populate the db.json file with userNote entries
    db.push(userNote)

// Writes the file to db.json and stringify so we can save it 
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        err ? console.log(err) : res.json(db); 
    })
    console.log(userNote);
    }
})

// This will allow a user to delete notes
app.delete('/api/notes/:id', (req, res) => {
    db = db.filter(db => db.id !== req.params.id)
    res.json(db)
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});