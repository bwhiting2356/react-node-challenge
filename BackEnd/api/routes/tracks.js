const express = require('express');
const router = express.Router();
const tracks = require('./tracks.json');

//Route 
router.get('/', (req, res, next) =>{
    res.status(200).json({
        tracks: tracks
    });
});

module.exports = router;