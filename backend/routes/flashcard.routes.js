const {createFlashcard, 
    getFlashCard, 
    deleteFlashCard,
    getFlashCardById}=require('../controllers/flashcard.js')
const express=require('express')
const auth = require('../middleware/auth')

const flashRouter=express.Router()

flashRouter.post('/createFlash',createFlashcard)
flashRouter.get('/getFlash',getFlashCard)
flashRouter.get('/deleteFlash/:id',deleteFlashCard)
flashRouter.get('/getFlash/:id',getFlashCardById)

module.exports=flashRouter