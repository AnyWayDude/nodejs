function powerValidation(power) {
    return power > 0 && power < 100; 
}

function defenseValidation(defense) {
    return defense > 0 && defense < 10; 
}

function healthValidation(health) {
    return health > 80 && health < 120; 
}

exports.powerValidation = powerValidation;
exports.defenseValidation = defenseValidation;
exports.healthValidation = healthValidation;