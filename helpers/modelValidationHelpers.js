function createModelValidation(model, body) {
    const { id, ...restModel } = model;

    const isValidModelLength = Object.keys(restModel).length === Object.keys(body).length;
    const isValidModelKeys = Object.keys(body).every(key => Object.keys(restModel).includes(key));

    return isValidModelKeys && isValidModelLength;
}

function updateModelValidation(model, body) {
    const { id, ...restModel } = model;

    const isValidModelKeys = Object.keys(body).every(key => Object.keys(restModel).includes(key));

    return isValidModelKeys;
}

exports.createModelValidation = createModelValidation;
exports.updateModelValidation = updateModelValidation;