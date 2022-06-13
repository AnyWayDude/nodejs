const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValidation, updateFighterValidation } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get(
    '/',
    (req, res, next) => {
        try {
            console.log('asdasds')
            const data = FighterService.getCollection();
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

router.get(
    '/:id',
    (req, res, next) => {
        try {
            const data = FighterService.getById(req.params.id);
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
    createFighterValidation,
    (req, res, next) => {
        if (res.err) {
            return next();
        }
        
        try {
            const data = FighterService.create(req.body);
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
    (req, res, next) => {
        try {
            const data = FighterService.update(req.params.id, req.body);
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
            const data = FighterService.delete(req.params.id);
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