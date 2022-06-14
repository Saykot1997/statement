const mongoose = require('mongoose');

const BankTransictionSchema = new mongoose.Schema({

    transactionName: {
        type: String,
        required: true,
    },
    bankId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
    },
    transactionType: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    transactionMethod: {
        type: String,
        enum: ['cash', 'cheque', 'online', "atm", "service_charge"],
    },
    branch: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('BankTransiction', BankTransictionSchema);