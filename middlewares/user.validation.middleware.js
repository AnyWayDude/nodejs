const { createError } = require('../helpers/createErrorHelper');
const { createModelValidation, updateModelValidation } = require('../helpers/modelValidationHelpers');
const { emailValidation, phoneNumberValidation, passwordValidation } = require('../helpers/userValidationHelper');
const { user } = require('../models/user');
const UserService = require('../services/userService');

const createUserValidation = (req, res, next) => {

    const isValidModel = createModelValidation(user, req.body);
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const error = getUserValidationError(req.body);
    if (error) {
        res.status(400);
        res.err = error;
    }
    
    next();
}

const updateUserValidation = (req, res, next) => {
    const isValidModel = updateModelValidation(user, req.body)
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const error = getUserValidationError(req.body);
    if (error) {
        res.status(400);
        res.err = error;
    }

    next();
}

const getUserValidationError = (body) => {
    const { email, phoneNumber, password } = body;

    const isValidEmail = emailValidation(email)
    if (email && !isValidEmail) {
        return createError('Invalid gmail address');
    }

    const isDuplicateEmail = UserService.search({
        email,
    });
    if (email && isDuplicateEmail) {
        return createError('Email already exist');
    }

    const isValidPhoneNumber = phoneNumberValidation(phoneNumber)
    if (phoneNumber && !isValidPhoneNumber) {
        return createError('Invalid phone number');
    }

    const isDuplicatePhoneNumber = UserService.search({
        phoneNumber,
    });
    if (phoneNumber && isDuplicatePhoneNumber) {
        return createError('Mobile phone already exist');
    }

    const isValidPassword = passwordValidation(password)
    if (password && !isValidPassword) {
        return createError('Invalid password');
    }

    return null;
}

exports.createUserValidation = createUserValidation;
exports.updateUserValidation = updateUserValidation;