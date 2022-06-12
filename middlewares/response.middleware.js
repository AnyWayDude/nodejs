const responseMiddleware = (req, res, next) => {
    if (res.err) {
        res.send(res.err)
    } else {
        res.send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;