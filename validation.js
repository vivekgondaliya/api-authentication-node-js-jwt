//VALIDATION
const Joi = require('@hapi/joi');

//Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required().label("Name"),
        email: Joi.string().min(6).required().email().label("Email"),
        password: Joi.string().min(6).required().label("Password")
    });

    return schema.validate(data);
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email().label("Email"),
        password: Joi.string().min(6).required().label("Password")
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

