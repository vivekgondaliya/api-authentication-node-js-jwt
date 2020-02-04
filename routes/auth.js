const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {registerValidation} = require('../validation');

router.post('/register', async (req, res) => {
    //validate prior to DB save
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if user exist
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }

});

module.exports = router;

