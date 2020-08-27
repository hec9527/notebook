# MongoDB

非关系型数据库，NoSQL(not only sql)，高性能、高可用、可伸缩  
所有存储在集合中的数据都是BSON格式，和JSON格式相比增加了ObjectID、Double、Date等类型

关系型数据库遵循ACID原则

- 原子性(Atimicity) 事务的操作要么全部完成，要么不做，只要有一个操作失败，全部回滚
- 一致性(Consistency) 事务运行不会改变数据库的一致性约束，a+b=10，改变a之后，依然满足a+b=10否则事务失败
- 独立性(Isolation) 并发的事务之间不会相互影响
- 持久性(Durability) 事务一旦提交之后，它所做的修改会永久保存

## 数据库操作

### 创建数据库

> 如果数据库中没有表，那么这个数据库并没有真正的创建，此时查看数据库还找不到

```sql
use mongo
```

### 查看数据库

> 查看mongo中的所有数据库

```sql
show dbs
```

### 删除数据库

> 返回一个对象，删除成功会包含`dropped`属性，值为删除的数据库名，如果数据库不存在，也不会报错

```sql
db.dropDatabase()
```

## 集合（文档）

### 创建集合

> 在集合中插入数据会自动创建集合

### 删除集合

> 语法 `db.COLLECTION_NAME.drop()`

```sql
db.test.drop()
```

### 插入数据

> 语法 `db.COLLECTION_NAME.insert(document)`  
> `db.COLLECTION_NAME.save(document)`  
> 使用`save`方法，如果指定`_id`字段，可以更新`_id`的值  
> 使用`save`方法会使用传入的值覆盖已有的值

```sql
db.test.insert({name: "张三", age: 24})
```

### 查看数据

> 语法 `db.COLLECTION_NAME.find()`

```sql
db.test.find()
```

### 删除数据

> 语法 `db_COLLECTION_NAME.remove(<query>,{justOne:Boolean,writeConcern:document})`  
> query?: 查询
> justOne?: 只作用于一条数据
> writeConcern?: 报错级别

```sql
db.test.remove({'name':"张三"})
```

### 更新数据

语法格式

```sql
db.COLLECTION_NAME.update(
    <query>,
    <update>,
    {
        upsert: <boolean>,
        multi: <boolean>,
        writeConcern: <boolean>
    }
)
```

- query: update的查询条件，查找需要更新的数据
- update: 更新的数据内容
- upsert?: 如果数据不存在，则插入
- multi? 更新所有的数据，默认为false
- writeConcern?: 抛出异常的级别

## 高级查询

### 索引

> Mongodb会为数据建立索引，在进行插入、删除、更新时也需要对索引尽心操作，如果很少读取可以不适用索引  
> Mongodb的索引是存放在内存中的，所以应该确定索引不会超过内存显示，超过部分索引会被删除，导致性能下降  
> 索引不能被这些查询语句(`$nin` `$not`)、正则表达式以及非操作符使用  
> 集合索引不能超过64个  
> 索引名长度不能超过125字符  
> 复合索引最多可以有31个字段

#### 创建索引

语法

```sql
db.COLLECTION_NAME.ensureIndex({key1: 1, key2: -1}, option:{})
```

其中key为要创建索引的字段，1为按照升序创建索引，-1为按照降序创建索引，一个集合中可以将多个字段创建为索引

`ensureIndex函数可选项`

- background: 创建索引时会阻塞数据库操作，使用background方式可以在后台创建索引，默认为false
- unique: 建立的索引是否唯一，默认为false
- name: 索引的名称，默认拼接所有索引字段和值
- dropDups: 建立唯一索引时是否删除重复记录，默认false
- sparse: 文档中不存在的字段不建立索引，默认为false
- expireAfterSeconds： 设定集合的生存时间，单位s
- v: 索引的版本号，默认为mongodb的版本
- weights: 索引权重值，1-99999，表示与其它索引的权重
- default_language: 对于文本索引，决定了分词接线，默认为英语
- language_override: 对于文本索引，该参数指定了在文本中的字段名

`.explain()` 查看是否使用索引

#### 高级索引
