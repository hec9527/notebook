from django.db import models


# 改变模型3步
#       1.修改 model.py 文件 来改变模型
#       2.运行 python manage.py makemigrations 为模型的改变生成迁移文件
#       3.python manage.py  migrate     来迁移数据库

class Question(models.Model):
    objects = models.Manager()
    def __str__(self):
        return self.question_text
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")


class Choice(models.Model):
    objects = models.Manager()
    def __str__(self):
        return self.choice_text
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    
