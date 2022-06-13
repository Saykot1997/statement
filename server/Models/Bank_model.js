const mongoose = require('mongoose');

const BankSkema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true,
    }
}, { strict: false }, { timestamps: true });


module.exports = mongoose.model('Bank', BankSkema);