from django.contrib import admin
from .models import Question, Choice

# 这里是注册的应用程序
admin.site.register(Question)
admin.site.register(Choice)
# Register your models here.
