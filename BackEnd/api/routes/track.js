const express = require('express');
const router = express.Router();
const tracks = require('./tracks.json');

//Route 
router.post('/', (req, res, next) =>{
    const id = req.body.id;
    if(tracks[id]){
        res.status(200).json({
        track: tracks[id]
     });
    }else{
    res.status(500);
    res.json({
        error:{
            message: 'Track not found.'
        }}); 
    }   
});

module.exports = router;