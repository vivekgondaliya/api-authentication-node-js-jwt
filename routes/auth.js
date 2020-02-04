const router = require('express').Router();
const User = require('../model/User');

//VALIDATION
const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().min(6).required().label("Name"),
    email: Joi.string().min(6).required().email().label("Email"),
    password: Joi.string().min(6).required().label("Password")
})

router.post('/register', async (req, res) => {
    //VALIDATE DATA BEFORE SAVING A USER
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

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

