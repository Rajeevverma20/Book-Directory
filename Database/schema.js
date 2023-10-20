const mongoose = require('mongoose');
const db = require('./connectionDb');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
});

const Book = mongoose.model('Book', BookSchema); 

module.exports = Book;