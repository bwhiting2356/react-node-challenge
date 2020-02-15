const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const tracks = require('./api/routes/tracks');
const track = require('./api/routes/track');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../FrontEnd/build')));
app.use('/all_tracks', tracks);
app.use('/track', track);
 
app.use((req, res, next ) =>{
    const error = new Error('Not found');
    res.status(404);
    next(error);
});

app.use((error, req, res, next ) =>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app;