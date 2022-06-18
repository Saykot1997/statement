const mongoose = require('mongoose');

const BankTransictionSchema = new mongoose.Schema({

    transactionName: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    transactionMethod: {
        type: String,
        enum: ['cash', 'cheque', 'online', "atm"],
    },
    branch: {
        type: String,
        required: true
    }
}, { strict: false }, { timestamps: true });

module.exports = mongoose.model('BankTransiction', BankTransictionSchema);