const mongoose = require('mongoose');

const BankTransictionSchema = new mongoose.Schema({

    transactionName: {
        type: String,
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
    }
}, { strict: false }, { timestamps: true });

module.exports = mongoose.model('BankTransiction', BankTransictionSchema);