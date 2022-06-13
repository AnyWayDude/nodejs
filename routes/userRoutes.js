const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValidation, updateUserValidation } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get(
    '/',
    (req, res, next) => {
        try {
            const data = UserService.getCollection();
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);

router.get(
    '/:id',
    (req, res, next) => {
        try {
            const data = UserService.getById(req.params.id);
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);

router.post(
    '/',
    createUserValidation,
    (req, res, next) => {
        if (res.err) {
            return next();
        }

        try {
            const data = UserService.create(req.body);
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);

router.put(
    '/:id',
    updateUserValidation,
    (req, res, next) => {
        try {
            const data = UserService.update(req.params.id, req.body);
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);

router.delete(
    '/:id',
    (req, res, next) => {
        try {
            const data = UserService.delete(req.params.id);
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);



module.exports = router;