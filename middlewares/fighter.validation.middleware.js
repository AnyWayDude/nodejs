const { fighter } = require('../models/fighter');
const { createError } = require('../helpers/createErrorHelper');
const { creationModelValidation } = require('../helpers/modelValidationHelpers');
const { powerValidation, defenseValidation, healthValidation } = require('../helpers/fighterValidationHelpers');


const createFighterValidation = (req, res, next) => {
    const isValidModel = creationModelValidation(fighter, req.body);
    if (!isValidModel) {
        res.status(400);
        res.err = createError('Invalid model');
        return next();
    }

    const isValidPower = powerValidation(req.body.power);
    if (!isValidPower) {
        res.status(400);
        res.err = createError('Invalid 1-99 power');
        return next();
    }

    const isValidDefense = defenseValidation(req.body.defense);
    if (!isValidDefense) {
        res.status(400);
        res.err = createError('Invalid 1-9 defense');
        return next();
    }

    const isValidHealth = healthValidation(req.body.health);
    if (!isValidHealth) {
        res.status(400);
        res.err = createError('Invalid 81-119 health');
        return next();
    }



    next();
}

const updateFighterValidation = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValidation = createFighterValidation;
exports.updateFighterValidation = updateFighterValidation;