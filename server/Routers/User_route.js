const express = require('express');
const Router = express.Router();
const User = require('../Models/User_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Transiction = require('../Models/Transiction_model');
const Bank = require('../Models/Bank_model');
const Authguard = require('../Authgurd/Authgurd');


// login

Router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json("Invalid Password")
        }

        if (!process.env.TOKENSECRATE) {
            return res.status(500).json("Token Secrate is not defined")
        }

        const token = jwt.sign({ id: user._id }, process.env.TOKENSECRATE);
        return res.status(200).json(token)

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
});


// register
Router.post('/register', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        return res.status(400).json("Please fill all fields")
    }

    try {

        const user = await User.findOne({ email });

        if (user) {

            return res.status(400).json("User already exists")
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            email,
            password: hashedPassword
        })

        await newUser.save();

        return res.status(200).json("User created")

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
});


// create Bank
Router.post('/banks', Authguard, async (req, res) => {

    const { bankName } = req.body;

    if (!bankName) {

        return res.status(400).json("Please fill all fields")
    }

    try {

        const bank = await Bank.findOne({ bankName });

        if (bank) {

            return res.status(400).json("Bank already exists")
        }

        const newBank = new Bank({
            bankName
        }).save();

        return res.status(200).json("Bank created")

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
});


// get all Banks
Router.get('/banks', Authguard, async (req, res) => {

    try {

        const banks = await Bank.find();

        return res.status(200).json(banks)

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
})



// create transaction
Router.post('/transaction', Authguard, async (req, res) => {

    const { transactionName, bankId, transactionType, transactionMethod, branch } = req.body

    if (!transactionName || !bankId || !transactionType || !transactionMethod || !branch) {

        return res.status(400).json("Please fill all fields")
    }

    try {

        const isExist = await Transiction.findOne({
            $and: [
                { transactionName },
                { bankId },
            ]
        });

        if (isExist) {

            return res.status(400).json("Transaction already exists")
        }

        const newTransaction = new Transiction({
            transactionName,
            bankId,
            transactionType,
            transactionMethod,
            branch
        })

        const saveTransiction = await newTransaction.save();

        return res.status(200).json("Transaction created")

    } catch (error) {

        console.log(error);
        return res.status(500).json("Something went wrong")
    }
})


// get all transactions of a company

Router.get('/transaction/:bankId', Authguard, async (req, res) => {

    const { bankId } = req.params;

    try {

        const transactions = await Transiction.find({ bankId: bankId }).populate('bankId');

        return res.status(200).json(transactions)

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
})




module.exports = Router