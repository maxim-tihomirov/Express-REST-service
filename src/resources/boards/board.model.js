const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'BoardDefault',
    columns = { id: null, title: 'ColumnDefault', order: 0 },
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
