const database = require('../../common/database');

const get = (id) => database.getTask(id);

const add = (board) => database.createTask(board);

const update = (id, body) => database.updateTask(id, body);

const del = (id) => database.deleteTask(id);

const getAll = async () => database.getAllTasks();

module.exports = { getAll, del, add, get, update };
