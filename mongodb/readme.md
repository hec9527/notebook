# Mongodb

数据库 --> 集合 --> 文档

集合：相当于 SQL 的表

文档：相当于 SQL 表中的一条数据

## 安装 Mac

```zsh
# 通过brew安装
brew tap mongodb/brew
brew install mongodb-community@4.4
# 启动mongo后台服务
brew services start mongodb/brew/mongodb-community
```

## 语法

### 操作符

- `$in` 过滤条件： `{ $in: ['a', 'b'] }`
- `$eq`
- `$lt`
- `$gt`
- `$or` 过滤条件： `{$or: [{age: {$lt: 25}}, {name:'saga'}]}`
- `$all` 匹配数组时，指定数组里面的内容
- `$` 和 `$elemMatch`
- `$type` BSON 数据类型
- `$exists` 是否存在 ture / false

### 增

- `db.test.insertOne({name:"saga", age:22})`
- `db.test.insertMany([{name:'saga'}, {name:"lisa"}])`
- `db.test.insert`  
   `insertOne`和`insertMany`的结合，可以插入一个或者多个

### 查

#### 基本用法

- `db.test.find(<filter>)`  
  `<filter>`可以不用传
- `db.test.find({name:"saga", age:22})` 模拟 and 操作符

#### 查询条件

简单相等 `{name: 'saga'}`  
正则匹配 `{name: /^sa/g}`
操作符查询

#### 嵌套查询

- `db.test.find({addr: {province: "SiChuan", country:"china"}})`  
  嵌套精准查询
- `db.test.find({'addr.province': "SiChuand"}})`  
  查询`addr.province` 为 `SiChuand` 的所有文档

#### 数据查询

- 匹配数组的时候，会依次检查数组中的元素时候相等以及他们的位置，使用`$all`指定数组中元素相同，不考虑索引
- 查询数组中是否包含某个元素，用法同 `{name: 'saga'}`, 如果数组中是对象，匹配时考虑对象属性顺序
- 数组也可以使用`gt`、`lt`等条件，指定多个条件为`$or`逻辑，只要数组中一个满足其中的一个条件，就返回这个文档
- 使用`$elemMatch`操作符，则要求数组中有一个元素满足里面所有的规则  
   `db.test.find({tags: {$elemMatch: {$gt:22, $lt: 30} })` # 查找 tags 中包含 22 到 30 的文档
- 使用属性访问的方式访问数组索引  
   `db.test.find({'tags.1': {$gt:20})`
- 使用`$size`匹配数组的长度  
   `db.test.find({tags: {$size: 3}})`
- 数组元素的属性也可以嵌套  
   `db.test.find({'peoples.name':'saga'})` # 查找 people 数组中包含 name 为 saga 的文档

#### 限制字段

- db.test.find(filter,field)

  `db.test.find({name: "rectangle"}, {'size.h':1, _id:0})` 查找 name 为`rectangle`只要`size.h`字段，不包含\_id

  推断不能同时存在 `包含(1)` 和 `排除(0)`。 `_id` 除外，可以在任何时候排除

### 改
