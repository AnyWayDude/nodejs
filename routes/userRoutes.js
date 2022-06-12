const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.get(
    '/',
    (req, res, next) => {
        try {
            const data = UserService.getCollection()
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
            const data = UserService.getById(req.params.id)
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
    (req, res, next) => {
        try {
            console.log("data")
            const data = UserService.create(req.body)
            console.log(data)
            res.data = data;
        } catch (err) {
            res.err = err;
        } finally {
            next();
        }
    },
    responseMiddleware
);

router.patch(
    '/:id',
    (req, res, next) => {
        try {
            const data = UserService.update(req.params.id, req.body)
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
            const data = UserService.delete(req.params.id)
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