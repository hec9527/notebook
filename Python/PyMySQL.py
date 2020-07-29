import pymysql


class MySql():
    def __init__(self):
        # connect 函数参数 arg1：数据库服务器  arg2：用户名，arg3：密码，arg4：数据库名
        self.cnn = pymysql.connect('localhost', "root", "123456", "wallpaper")
        self.cursor = self.cnn.cursor()

    def insert(self, **kw):
        "url,size,type,tag,cached,url_local,dislike,dislike_usr,likeNum"
        if self.cursor:
            try:
                # 注意   插入操作需要 执行commit操作
                sql = f"""insert into images(url,size,type,tag,cached,url_local,dislike,dislike_usr,likeNum)\
                    values('{kw["url"]}','{kw["size"]}','{kw["type"]}','{kw["tag"]}','{kw["cached"]}',\
                    '{kw["url_local"]}','{kw["dislike"]}','{kw["dislike_usr"]}','{kw["likeNum"]}')"""
                result = self.cursor.execute(sql)
                self.cnn.commit()
                return result
            except Exception as e:
                # 插入操作如果出错需要回滚
                self.cnn.rollback()
                print(e)
        else:
            print("some Error occur when insert into datebase")
            raise pymysql.OperationalError

    def queryById(self, id):
        if self.cursor:
            try:
                self.cursor.execute(f'select * from images where id={id}')
                result = self.cursor.fetchone()
                return result
            except Exception as e:
                print(e)
        else:
            print("some Error occur when queryById")

    def queryByType(self, type):
        if self.cursor:
            try:
                self.cursor.execute(
                    f"select * from images where type='{type}';")
                result = self.cursor.fetchall()
                return result
            except Exception as e:
                print(e)
        else:
            print("some Error occur when queryByType")

    def updateSize(self):
        if self.cursor:
            try:
                # result 为响应的行数
                result = self.cursor.execute(
                    f"update images set size='4k' where size='4k高清';")
                self.cnn.commit()
                return result
            except Exception as e:
                self.cnn.rollback()
                print(e)

    def deleteByType(self, type):
        if self.cursor:
            try:
                result = self.cursor.execute(
                    f"delete from images where type='{type}'")
                self.cnn.commit()
                return result
            except Exception as e:
                self.cnn.rollback()
                print(e)

    def __del__(self):
        print("关闭数据库链接")
        self.cnn.close()


if __name__ == "__main__":
    db = MySql()
    # 增
    result = db.insert(url="2dsafaf",
                       size="4K高清",
                       type="汽车",
                       tag="美女,靓仔,潮男",
                       cached="1",
                       url_local="none",
                       dislike="3",
                       dislike_usr="123113,123132,144141",
                       likeNum="1000")
    print(f'insert result:{result}')
    result = db.insert(url="xbchfd",
                       size="2K高清",
                       type="动漫",
                       tag="美女,靓仔,潮男",
                       cached="1",
                       url_local="none",
                       dislike="2",
                       dislike_usr="23,123153532,234",
                       likeNum="10")
    print(f'insert result:{result}')
    # 查
    data = db.queryById(18)
    print("id查询结果：" + str(data))
    data = db.queryByType("4K高清")
    print("分类查询结果", data, type(data))
    # 改
    db.updateSize()
    # 删
    result = db.deleteByType("动漫")
    print("删除：", result, "行数据")
