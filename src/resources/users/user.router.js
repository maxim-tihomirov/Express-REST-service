const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAll);

router.get('/:id', controller.getUser);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;
