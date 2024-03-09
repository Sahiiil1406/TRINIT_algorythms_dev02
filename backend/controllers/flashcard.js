const Flashcard=require("../models/flashcards.js")

//create flashcard
const createFlashcard = async (req, res) => {
  try {
    const {title,content}=req.body;
    
    const newFlashcard =await Flashcard.create(
      {title,content}
    )
    return res.json({
        message: "Flashcard created successfully",
        newFlashcard
        });

} catch (error) {
   return res.status(409).json({ message: error.message });
  }
}; 

//get flashcard
const getFlashCard = async (req, res) => {
  try {
     
    const flashcard = await Flashcard.find({});
    
    return res.json({ message: "get all flashcard",
    flashcard,
    });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

//delete flashcard
const deleteFlashCard = async (req, res) => {
  try {
    const id=req.params.id
    const flashcard = await Flashcard.findByIdAndDelete(id);
    return res.json({ message: "Flashcard deleted successfully",
    flashcard,
    });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

//get flashcard by id
const getFlashCardById = async (req, res) => {
  try {
    const id=req.params.id
    const flashcard = await Flashcard.findById(id);
    return res.json({ message: "get flashcard by id",
    flashcard,
    });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};


module.exports = { 
    createFlashcard, 
    getFlashCard, 
    deleteFlashCard,
    getFlashCardById };