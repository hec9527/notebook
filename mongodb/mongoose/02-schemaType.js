const { db, mongoose } = require('./00-demo');

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, index: true },
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65 },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: { type: [Date], default: [new Date(), new Date('2020-01-01')] },
  ofBuffer: [Buffer],
  ofBoolean: { type: [Boolean], default: [false, true] },
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true },
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String,
  },
  schemaWithTypeProperty: { type: { type: String, default: 'CS book' }, publisher: { type: String, default: '四川工业出版社' } },
});

// example use
const Thing = mongoose.model('Thing', schema);

const thing = new Thing({
  name: '测试SchemaType',
  living: true,
  age: 19,
});

thing.save(async err => {
  if (err) {
    console.error(err.message);
  }
  console.log(await Thing.find().exec());
  Thing.find(function (error, doc) {
    doc.markModified('updated');
  });
});
