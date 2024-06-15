
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { userId, password } = req.body;
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    try {
        let user = new User({ userId, password, expiryDate });
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
