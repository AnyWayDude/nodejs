const { fighter } = require('../models/fighter');
const { createError } = require('../helpers/createErrorHelper');
const { createModelValidation } = require('../helpers/modelValidationHelpers');
const { powerValidation, defenseValidation, healthValidation } = require('../helpers/fighterValidationHelpers');
const FighterService = require('../services/fighterService');


const createFighterValidation = (req, res, next) => {

    const isValidModel = createModelValidation(fighter, req.body);
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const error = getFighterValidationError(req.body);
    if (error) {
        res.status(400);
        res.err = error;
    }

    next();
}

const updateFighterValidation = (req, res, next) => {

    const isValidModel = updateModelValidation(user, req.body)
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const error = getFighterValidationError(req.body);
    if (error) {
        res.status(400);
        res.err = error;
    }

    next();
}

const getFighterValidationError = (body) => {
    const { name, power, defense, health } = body;

    const isDuplicateFighterName = FighterService.search({
        name,
    });
    if (name && isDuplicateFighterName) {
        return createError('Fighter name already exist');
    }

    const isValidPower = powerValidation(power);
    if (power && !isValidPower) {
        return createError('Power 1-99 invalid ');
    }

    const isValidDefense = defenseValidation(defense);
    if (defense && !isValidDefense) {
        return createError('Defense 1-9 invalid');
    }

    const isValidHealth = healthValidation(health);
    if (health && !isValidHealth) {
        return createError('Health 81-119 invalid');
    }

    return null;
}

exports.createFighterValidation = createFighterValidation;
exports.updateFighterValidation = updateFighterValidation;