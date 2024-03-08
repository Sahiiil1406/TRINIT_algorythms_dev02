const {createFlashcard, 
    getFlashCard, 
    deleteFlashCard,
    getFlashCardById}=require('../controllers/flashcard.js')
const express=require('express')
const auth = require('../middleware/auth')

const flashRouter=express.Router()

flashRouter.post('/createFlash',auth,createFlashcard)
flashRouter.get('/getFlash',auth,getFlashCard)
flashRouter.get('/deleteFlash/:id',auth,deleteFlashCard)
flashRouter.get('/getFlash/:id',auth,getFlashCardById)

module.exports=flashRouter