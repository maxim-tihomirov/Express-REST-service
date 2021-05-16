const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

let boards = [];

let tasks = [];

let users = [];

const createUser = (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

function find(array, id) {
  return array.find((element) => element.id === id);
}

const getUser = (id) => find(users, id);

const getAllUsers = () => users;

const updateUser = (id, body) => {
  const currentUser = find(users, id);
  if (!currentUser) {
    return undefined;
  }

  const index = users.indexOf(currentUser);
  users[index] = {
    ...currentUser,
    ...body,
  };
  return users[index];
};

const deleteUser = (id) => {
  if (!find(users, id)) {
    return undefined;
  }

  tasks.forEach((task) => {
    const curTask = task;
    if (curTask.userId === id) {
      curTask.userId = null;
    }
  });
  users = users.filter((user) => user.id !== id);
  return true;
};

const createBoard = (board) => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const getBoard = (id) => find(boards, id);

const getAllBoards = () => boards;

const updateBoard = (id, body) => {
  const board = find(boards, id);
  if (!board) {
    return undefined;
  }

  const index = boards.indexOf(board);
  boards[index] = {
    ...board,
    ...body,
  };
  return boards[index];
};

const deleteBoard = (id) => {
  if (!find(boards, id)) {
    return false;
  }

  boards = boards.filter((board) => board.id !== id);
  tasks = tasks.filter((task) => task.boardId !== id);
  return true;
};

const createTask = (task) => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const getTask = (id) => find(tasks, id);

const getAllTasks = () => tasks;

const updateTask = (id, body) => {
  const task = find(tasks, id);
  if (!task) {
    return undefined;
  }

  const index = tasks.indexOf(task);
  tasks[index] = {
    ...task,
    ...body,
  };
  return tasks[index];
};

const deleteTask = (id) => {
  if (!find(tasks, id)) {
    return false;
  }

  tasks = tasks.filter((task) => task.id !== id);
  return true;
};

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
  createBoard,
  getBoard,
  getAllBoards,
  updateBoard,
  deleteBoard,
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
