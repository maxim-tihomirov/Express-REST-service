const router = require('express').Router({ mergeParams: true });
const controller = require('./task.controller');

router.get('/', controller.getAll);

router.get('/:taskId', controller.get);

router.post('/', controller.add);

router.put('/:taskId', controller.update);

router.delete('/:taskId', controller.del);

module.exports = router;
