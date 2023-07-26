const { db, mongoose } = require('./00-demo');

/**
 *  Schema  模式
 *
 * mongodb中的模式对标的是mongodb中的集合， 一个模式对应一个集合
 * 模式规定了集合中的文件的形状
 *
 * 使用 mongoose.model() 定义模型的时候，第一个参数为模型的名称，将作为数据库集合的名称
 *
 */

const BlogSchema = new mongoose.Schema({
  title: String,
  author: { type: String, default: '佚名' },
  createTime: Date,
  updateTime: { type: Date, default: Date.now() },
  hidden: Date,
  meta: Array,
  body: String,
  comment: Array,
});

BlogSchema.add({ price: Number });

const Blog = mongoose.model('blog', BlogSchema);

const s = new Blog({
  title: '第一行代码：Android（第三版）',
  author: '不知道',
  createTime: new Date(),
  price: 32,
});
s.save();

const BookSchema = new mongoose.Schema({ publisher: { type: String, default: '机械工业出版社' } }).add(BlogSchema);

BookSchema.static('findBookByName', function (name) {
  return this.find({ name });
});

const Book = mongoose.model('book', BookSchema);

const b = new Book({
  title: 'JavaScript权威指南',
  createTime: new Date(),
  price: 99,
  cover: Buffer,
});
b.save();

// console.log(`Schema id: `, new mongoose.Schema().path('_id'));

// console.log('find by name', Book.findBookByName('JavaScript权威指南'));

const PostSchema = new mongoose.Schema().add(BookSchema);

/** methods */
PostSchema.methods.showPushlisher = async function (publisher) {
  console.log(await mongoose.model('post').find({ publisher }).exec());
};
/** static methods */
PostSchema.static('findFromBook', async function (title) {
  console.log('\nfind from book');
  console.log(await mongoose.model('book').findOne({ title }).exec());
});
/** Query helper  支持链式查询 */
PostSchema.query.findByName = function (name) {
  return this.where({ title: name });
};

const Post = mongoose.model('post', PostSchema);
const post = new Post({ publisher: '四川出版社', title: 'JavaScript高级程序设计' });
post.save();
// post.showPushlisher('四川出版社');

/** 挂载 static */
Post.findFromBook('JavaScript权威指南');

/** Query Helper */
Post.find()
  .findByName('JavaScript高级程序设计')
  .exec((err, doc) => {
    console.log('\nfindbyName:');
    console.log(doc.length);
  });
Post.findOne()
  .findByName('JavaScript高级程序设计')
  .exec((err, doc) => {
    console.log('find by name limit one:');
    console.log(doc);
  });

/** virtual */
const PostSchemaWhthType = new mongoose.Schema({}, { autoCreate: false }).add(PostSchema);
PostSchemaWhthType.virtual('type').get(() => 'book');

PostSchemaWhthType.set({ autoIndex: false });

const PostWithType = mongoose.model('posttype', PostSchemaWhthType);

const p = new PostWithType();
console.log('获取虚拟属性：', p.type);
