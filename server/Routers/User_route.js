const express = require('express');
const Router = express.Router();
const User = require('../Models/User_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Transiction = require('../Models/Transiction_model');
const Bank = require('../Models/Bank_model');
const Authguard = require('../Authgurd/Authgurd');
const TAmount = require('../Models/TAmount_model');


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



// create transaction
Router.post('/transaction', Authguard, async (req, res) => {

    const { transactionName, bankName, transactionType, transactionMethod } = req.body

    if (!transactionName || !bankName || !transactionType || !transactionMethod) {

        return res.status(400).json("Please fill all fields")
    }

    try {

        const isExist = await Transiction.findOne({
            $and: [
                { transactionName },
                { bankName },
            ]
        });

        if (isExist) {

            return res.status(400).json("Transaction already exists")
        }

        const savedTransaction = await new Transiction({
            ...req.body,
        }).save();

        return res.status(200).json(savedTransaction)

    } catch (error) {

        console.log(error);
        return res.status(500).json("Something went wrong")
    }
})

// update transaction

Router.put('/transaction/:id', Authguard, async (req, res) => {

    const { id } = req.params;

    const { transactionName, bankName, transactionType, transactionMethod } = req.body;

    if (!transactionName || !bankName || !transactionType || !transactionMethod) {

        return res.status(400).json("Please fill all fields")
    }

    try {

        const isExist = await Transiction.findOne({
            $and: [
                { transactionName },
                { bankName },
            ]
        });

        if (isExist && isExist._id.toString() !== id) {

            return res.status(400).json("Transaction name already exists")
        }

        const updatedTransaction = await Transiction.findByIdAndUpdate(id, {
            ...req.body,
        }, { new: true });

        return res.status(200).json(updatedTransaction)

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
});


// delete transaction

Router.delete('/transaction/:id', Authguard, async (req, res) => {

    const { id } = req.params;

    try {

        await Transiction.findByIdAndDelete(id);

        return res.status(200).json("Transaction deleted")

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
})


// get all transactions of a company

Router.get('/transaction/:bankName', Authguard, async (req, res) => {

    try {

        const transactions = await Transiction.find({ bankName: req.params.bankName });

        return res.status(200).json(transactions)

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
});


// save transaction amount

Router.post('/transactionAmount', Authguard, async (req, res) => {

    if (!req.body.amounts) {
        return res.status(400).json("Amounts array is required")
    }

    try {

        const isAvailable = await TAmount.find()

        if (isAvailable.length > 0) {

            if (req.body.amounts.ATM) {

                let isAtmExist = isAvailable[0].ATM.length > 0;
                let isChequeExist = isAvailable[0].Cheque.length > 0;

                let objectId = ""

                if (isAtmExist && isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.ATM = req.body.amounts.ATM

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject)

                    return res.status(200).json("ATM updated")

                }

                if (isAtmExist && !isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.ATM = req.body.amounts.ATM

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject)

                    return res.status(200).json("ATM updated")
                }

                if (!isAtmExist && isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.ATM = req.body.amounts.ATM

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject)

                    return res.status(200).json("ATM updated")

                }

            } else if (req.body.amounts.Cheque) {

                let objectId = ""

                let isAtmExist = isAvailable[0].ATM.length > 0;
                let isChequeExist = isAvailable[0].Cheque.length > 0;

                if (isAtmExist && isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.Cheque = req.body.amounts.Cheque

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject, { new: true })

                    return res.status(200).json("Cheque amount saved")

                }

                if (!isAtmExist && isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.Cheque = req.body.amounts.Cheque

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject, { new: true })

                    return res.status(200).json("Cheque amount saved")

                }

                if (isAtmExist && !isChequeExist) {

                    objectId = isAvailable[0]._id

                    const updateAbleObject = {
                        ...isAvailable[0]._doc
                    }

                    updateAbleObject.Cheque = req.body.amounts.Cheque

                    await TAmount.findByIdAndUpdate(objectId, updateAbleObject, { new: true })

                    return res.status(200).json("Cheque amount saved")
                }
            }

        } else {

            if (req.body.amounts.Cheque) {

                const newTAmount = new TAmount({
                    Cheque: req.body.amounts.Cheque
                })

                await newTAmount.save();

                return res.status(200).json("Cheque amount saved")

            } else if (req.body.amounts.ATM) {

                const newTAmount = new TAmount({
                    ATM: req.body.amounts.ATM
                })

                await newTAmount.save();

                return res.status(200).json("ATM amount saved")
            }
        }

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
})


// get all transaction amounts

Router.get('/transactionAmount', Authguard, async (req, res) => {

    try {

        const transactionAmount = await TAmount.find();

        return res.status(200).json(transactionAmount[0])

    } catch (error) {

        return res.status(500).json("Something went wrong")
    }
})






module.exports = Router