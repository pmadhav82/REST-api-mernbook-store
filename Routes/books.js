const router = require ("express").Router();
const Book = require("../Module/book")

//geting all
router.get("/",  async (req,res)=>{
    try{
const books = await Book.find();
res.json(books)
    } catch(err){
res.status(500).json({message: err.message})
    }
})

// getting one

router.get("/:id", async (req, res)=>{
    try{

        const book = await Book.findById(req.params.id);
        res.json(book);
    }catch(err){
        res.status(404).json({message: 'Can not find the book'})
    }
})


//creating one
router.post('/', async (req,res)=>{
   if(req.body){
       try{
       const book =  await new Book(req.body).save();
 res.status(201).json(book)
    }
    catch(err){
        res.status(400).json({message:'Unable to this book'})
    }
} else{
    res.status(400).json({message: 'bad request'})
}
})


//updating
router.patch("/:id", async (req,res)=>{
    try{

        await Book.findByIdAndUpdate(req.params.id, req.body)
        res.json({message:'Updated successfully'})
    }catch(err){
        res.status(400).json({message: 'Unable to update the database'})
    }
})


//deleting one

router.delete("/:id", async (req,res)=>{
    try{
const book = await Book.findById(req.params.id);
await book.remove();
res.json({message:`${book.title} deleted successfully`})

    } catch(err){
        res.status(500).json({message:"Can not delete, try again latter"})
    }
})



module.exports = router;