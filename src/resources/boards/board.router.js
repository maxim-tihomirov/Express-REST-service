const router = require('express').Router();
const controller = require('./board.controller');

router.get('/', controller.getAll);

router.get('/:boardId', controller.get)

router.post('/', controller.add);

router.put('/:boardId', controller.update);

router.delete('/:boardId', controller.del);

module.exports = router;