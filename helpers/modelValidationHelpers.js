function creationModelValidation(model, body) {
    const { id, ...restModel } = model;

    const isValidModelLength = Object.keys(restModel).length === Object.keys(body).length;
    const isValidModelKeys = Object.keys(body).every(key => Object.keys(restModel).includes(key));

    return isValidModelKeys && isValidModelLength
}

exports.creationModelValidation = creationModelValidation;