const database = require('../../common/database');

const add = (user) => database.createUser(user);

const del = (id) => database.deleteUser(id);

const get = (id) => database.getUser(id);

const update = (id, body) => database.updateUser(id, body);

const getAll = async () => database.getAllUsers();

module.exports = { getAll, add, del, get, update };
