//dependencies
const events = require('express').Router()
const db = require('../models')
const { Event } = db

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A SPECIFIC EVENT
events.get('/:id', async (req, res)=>{
    try{
        const foundEvent = await Event.findOne({
            where : { band_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error){
        res.status(500).json(error)
    }
})

//export
module.exports = events