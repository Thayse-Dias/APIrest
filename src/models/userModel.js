const db = require('./database');
const bcrypt = require('bcrypt');

const User = {
  create: (user, callback) => {
    const { name, email, phone, password } = user;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return callback(err);
      const sql = `INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)`;
      db.run(sql, [name, email, phone, hash], function(err) {
        callback(err, { id: this.lastID });
      });
    });
  },

  findByEmail: (email, callback) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.get(sql, [email], callback);
  },

  findById: (id, callback) => {
    const sql = `SELECT id, name, email, phone, created_at FROM users WHERE id = ?`;
    db.get(sql, [id], callback);
  }
};

module.exports = User;