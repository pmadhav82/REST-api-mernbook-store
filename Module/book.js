const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    isbn: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required: true
    },
    description :{
        type: String
    },
    published_data:{
type:Date
    },
     publisher :{
        type: String
    }, 
    updated_data: {
        type: Date,
        default: Date.now()
    }
});




module.exports = new mongoose.model("book", bookSchema);