const MESSAGE = require('../users/user.enum');
const tasksRepo = require('./task.memory.repository');

const get = (req, res) => {
  const task = tasksRepo.get(req.params.taskId);
  res.json(task);
};

const add = (req, res) => {
  const task = tasksRepo.add({ ...req.body, boardId: req.params.boardId });
  if (task) {
    res.status(201).json(task);
  } else {
    res.status(404);
  }
};

const update = (req, res, next) => {
  const task = tasksRepo.update(req.params.taskId, req.body);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404);
    next();
  }
};

const del = (req, res, next) => {
  const isDelete = tasksRepo.del(req.params.taskId);
  if (isDelete) {
    res.status(204).json({ message: 'The task has been deleted' });
  } else {
    res.status(404).send(MESSAGE.NotFound);
    next();
  }
};

const getAll = async (req, res) => {
  const tasks = await tasksRepo.getAll();
  res.json(tasks);
};

module.exports = { getAll, get, add, update, del };
