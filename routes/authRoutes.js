const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createError } = require('../helpers/createErrorHelper');

const router = Router();

router.post('/login', (req, res, next) => {
    try {
        const data = AuthService.login(req.body);
        res.data = data;
    } catch (err) {
        res.status(401);
        res.err = createError(err.message);
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;