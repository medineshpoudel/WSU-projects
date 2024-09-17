const mongoose = require('mongoose');


const colorDetailSchema = new mongoose.Schema({
    colorName: {
        type: String, 
        required: true,
    },
    timeTaken: {
        type: Number,
        required: true,
    },
});

// Define the schema for test colors
const testColorSchema = new mongoose.Schema({
    actualColorName: {
        type: String,
        required: true,
    },
    colorSelected: {
        type: [],  
        required: true,
    },
});

module.exports = mongoose.model('TestColors',testColorSchema)

