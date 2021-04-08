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

const KitSchema = new mongoose.Schema({
  name: String,
  age: Number,
  variety: String,
  create: Date,
});

const Kittens = mongoose.model('Kitten', KitSchema);

// Kittens

const helo = new Kittens({
  name: 'saga',
  age: 1.5,
  variety: '英短',
  create: new Date(),
});

console.log(helo);

const helloKit = new Kittens({
  name: 'hello kit',
});

console.log(helloKit);

helo.save();
helloKit.save();

Kittens.find({ name: 'saga' }, (error, doc) => {
  console.log('\n\n\n=========查找数据库=========');
  console.log(doc);
});
