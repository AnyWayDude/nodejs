const { createError } = require('../helpers/createErrorHelper');
const { creationModelValidation } = require('../helpers/modelValidationHelpers');
const { emailValidation, phoneNumberValidation, passwordValidation } = require('../helpers/userValidationHelper');
const { user } = require('../models/user');

const createUserValidation = (req, res, next) => {
    const isValidModel = creationModelValidation(user, req.body);
    
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const isValidEmail = emailValidation(req.body.email)
    
    if (!isValidEmail) {
        res.status(400)
        res.err = createError('Invalid gmail address');
        return next();
    }

    const isValidPhoneNumber = phoneNumberValidation(req.body.phoneNumber)

    if (!isValidPhoneNumber) {
        res.status(400)
        res.err = createError('Invalid phone number');
        return next();
    }

    const isValidPassword = passwordValidation(req.body.password)
    console.log(isValidPassword)
    if (!isValidPassword) {
        res.status(400)
        res.err = createError('Invalid password');
        return next();
    }


    next();

    
}

const updateUserValidation = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValidation = createUserValidation;
exports.updateUserValidation = updateUserValidation;