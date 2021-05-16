const user = require('./user.memory.repository');
const User = require('./user.model');
const MESSAGE = require('./user.enum');

const sendResponse = (res, code, message, data) => {
  if (message) {
    res.json({ message });
    return;
  }

  res.status(code).json(data);
};

const send404 = (res) => {
  sendResponse(res, 404, MESSAGE.NotFound);
};

const createUser = (req, res) => {
  const newUser = user.add(req.body);
  sendResponse(res, 201, null, User.toResponse(newUser));
};

const getUser = (req, res, next) => {
  const currentUser = user.get(req.params.id);
  if (currentUser) {
    sendResponse(res, 200, null, User.toResponse(currentUser));
  } else {
    send404(res);
    next();
  }
};

const updateUser = (req, res, next) => {
  if (req.body) {
    const currentUser = user.update(req.params.id, req.body);
    if (currentUser) {
      sendResponse(res, 200, null, User.toResponse(currentUser));
    } else {
      res.status(404);
      next();
    }
  } else {
    sendResponse(res, 400, MESSAGE.BadRequset);
  }
};

const deleteUser = (req, res, next) => {
  const isSuccess = user.del(req.params.id);
  if (isSuccess) {
    sendResponse(res, 204, MESSAGE.UserDeleted);
  } else {
    send404(res);
    next();
  }
};

const getAll = async (req, res) => {
  const users = await user.getAll();
  sendResponse(res, 200, null, users.map(User.toResponse));
};

module.exports = { createUser, getUser, updateUser, deleteUser, getAll };
