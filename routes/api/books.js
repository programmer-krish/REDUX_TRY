const express = require('express');
const router = express.Router();

//Book model

const Book = require('../../models/Book');
//@route  GET api/books
//@desc GET All Books
//@access Public

router.get('/', (req, res) => {
    Book.find()
        .sort({ date: -1 })
        .then(books => res.json(books))
});

//@route  POST api/books
//@desc Create a Book
//@access Public

router.post('/', (req, res) => {
    const newBook = new Book({
        name: req.body.name
    });

    newBook.save().then(book => res.json(book)); 


});

//@route  DELETE api/books
//@desc Delete  a book
//@access Public

router.delete('/:id', (req, res) => {
   
Book.findById(req.params.id)
.then(book => book.remove().then(()=> res.json({success: true})))
.catch(err => res.status(404).json({success: false}))
})




module.exports = router;


