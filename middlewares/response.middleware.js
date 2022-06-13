const { createError } = require("../helpers/createErrorHelper");

const responseMiddleware = (req, res, next) => {
    if (res.err) {
        const statusCode = res.statusCode === 400 ? res.statusCode : 404;
        const error = createError(res.err.message);
        
        res.status(statusCode).send(error);
    } else {
        res.send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;