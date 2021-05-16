
const database = require('../../common/database');

const get = (id) => database.getBoard(id);

const add = (board) => database.createBoard(board);

const update = (id, body) => database.updateBoard(id, body);

const del = (id) => database.deleteBoard(id);

const getAll = async () => database.getAllBoards();

module.exports = { getAll, del, add, get, update };