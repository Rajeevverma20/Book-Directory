const router = require('express').Router();
const book = require('../Controller/api');

router.post('/create', book.createBook );

router.get('/getAll', book.getAllBook);

router.get('/getOne/:id', book.getBookById);

router.patch('/update/:id', book.updateBook);

router.delete('/delete/:id', book.deleteBook);

module.exports = router;

