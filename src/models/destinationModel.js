const db = require('./database');

const Destination = {
  create: (destination, callback) => {
    const { user_id, name, status, details, data } = destination;
    const sql = `INSERT INTO destinations (user_id, name, status, details, data) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [user_id, name, status, details, data], function(err) {
      callback(err, { id: this.lastID });
    });
  },

  findAllByUserId: (user_id, callback) => {
    const sql = `SELECT * FROM destinations WHERE user_id = ? ORDER BY created_at DESC`;
    db.all(sql, [user_id], callback);
  },

  findById: (id, callback) => {
    const sql = `SELECT * FROM destinations WHERE id = ?`;
    db.get(sql, [id], callback);
  },

  update: (id, destination, callback) => {
    const { name, status, details, data } = destination;
    const sql = `UPDATE destinations SET name = ?, status = ?, details = ?, data = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [name, status, details, data, id], function(err) {
      callback(err, { changes: this.changes });
    });
  },

  delete: (id, callback) => {
    const sql = `DELETE FROM destinations WHERE id = ?`;
    db.run(sql, [id], function(err) {
      callback(err, { changes: this.changes });
    });
  }
};

module.exports = Destination;