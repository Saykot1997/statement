const mongoose = require('mongoose');

const TAmountSchema = new mongoose.Schema({

    ATM: [],
    Cheque: [],

}, { timestamps: true });

module.exports = mongoose.model('TAmount', TAmountSchema);