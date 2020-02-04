const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../validation');

router.post('/register', async (req, res) => {
    //validate prior to DB save
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Check if user exist
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }

});

module.exports = router;

