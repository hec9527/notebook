const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('mongodb  connected!');
});

db.on('close', () => {
  console.log('mongodb closed!');
});

module.exports = { db, mongoose };
