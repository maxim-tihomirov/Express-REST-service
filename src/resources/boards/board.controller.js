const boardsRepo = require('./board.memory.repository');

const get = (req, res) => {
  const board = boardsRepo.get(req.params.boardId);
  res.json(board);
};

const add = (req, res) => {
  const board = boardsRepo.add(req.body);
  if (board) {
    res.status(201).json(board);
  } else {
    res.status(404);
  }
};

const update = (req, res, next) => {
  const board = boardsRepo.update(req.params.boardId, req.body);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404);
    next();
  }
};

const del = (req, res, next) => {
  const isDelete = boardsRepo.del(req.params.boardId);
  if (isDelete) {
    res.status(204).json({ message: 'The board has been deleted' });
  } else {
    res.status(404);
    next();
  }
};

const getAll = async (req, res) => {
  const boards = await boardsRepo.getAll();
  res.json(boards);
};

module.exports = { getAll, get, add, update, del };
