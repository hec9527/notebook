# Django 学习笔记

## 特别注意

`SECRET_KEY` 网站的策略，生产环境与开发环境应该不同
`DEBUG` 在开发的时候可以打开，但是在生产环境中应该关掉，否则会帮助别人攻击网站

## 创建新的网站

```shell
    django-admin startproject HelloWorld
```

## 网站文件结构

```shell
 - projectName/     //网站的名称
 - _pycache__/
    __init__
    setting.py    //包含用户的设置 注册应用、静态文件、数据库配置等
    urls.py  // 定义网站的URL和视图的映射关系可以使用includ包含其它应用的URL
    wsgi.py    //Django应用和网络服务器之间的通信
```

## 创建新的应用

```shell
    python manage.py startapp appName
    # 使用以上命令之后会在网站的更目录下创建相应的应用的文件夹
    # 每个应用有一个单独的文件夹
```

## 应用目录

```shell
> - migrations/   # 当修改数据模型的时候使用这个文件更新数据库
>   __init__.py  # 该文件作为python的包，允许在项目的的其它地方调用
>   admin.py
>   apps.py
>   models.py # 数据模型
>   test.py
>   views.py
```

- *在项目文件夹下最好新建一个`urls.py`的文件，用于绑定这个应用的所有URL映射关系，内容如下*

``` python
    from django.urls import path
    from . import views

    urlpatterns = [
        path("", views.index, name="index"),
    ]

```

- *在`/project/project/urls.py`里面通过`include`导入当前应用的URL即可*

## 注册应用

在`/project/project/setting.py`里面的`INSTALLED_APPS`最后一行添加下面的内容，这是包名加类名。指定应用的配置文件的路径

``` shell
    mytestApp.apps.MytestappConfig
```

## 配置数据库

在web应用的`setting`当中通过修改`DATABASES`可以修改网站的数据库，默认使用的SQLite,如果不适用默认的数据库则需要一些额外的配置

### Django支持的数据库

| 数据库  | 配置                          |
| ------- | ----------------------------- |
| SQLite  | django.db.backends.sqlites3   |
| postgre | django.db.backends.postgresql |
| mysql   | django.db.backends.mysql      |
| oracle  | django.db.backends.oracke     |

- 通过修改数据的`DATABASES.default.ENGINE`参数更改默认使用的数据库

- `NAME`参数用于指定数据库的名称

- 默认使用的SQLite作为一个文件夹存放在本地文件系统

- 如果需要使用其他数据库，例如`MySQL`则需要添加以下配置在`DATABASES.default`

- 如果需要使用`MYSQL`作为数据库，需要在网站`__init__.py`当中添加`import MySQLdb`

```json
    "USER":"DataBaseUser",
    "PASSWORD":"DatabasePasswd",
    "HOST":"127.0.0.1",
    "PORT":"3306"
```

- **使用MySQL数据库时，需要在__init__.py中添加`import MySQLdb`**

## URL映射器

在网站的URL配置文件中，可以包含其它应用的URL文件，
在`/project/project/urls.py`的`urlpatterns`里面添加

```python
    path("path\",include("app.urls"))
```

- 这里的`app`是指的应用程序的名称，如之前的myTestApp

## 使用`inlcude`需要先导入

``` python
    from django.urls import path,include
```

## 配置应用的URL映射器

网站的`urls.py`主要是导入其它应用的URL映射器，当然也可以直接写在里面，但是为了便于维护不建议这么做，应用程序的URL映射器主要是为视图绑定路劲。

- `path(route,view[,kwargs][,name])`
  - route    为视图绑定的路径
  - view     绑定的视图，一般来说需要指明需要从哪个包里面导入视图
  - kwargs   传递任意个关键字参数给视图函数
  - name     给URL其一个别名
  - 例子

```python
    app_name="vote"
    urlpatterns=[
        path("",views.index)
        path("<int:question_id>/",views.detail)
        path("<int:question_id>/result/<question_id1>/",views.result)
    ]
```

- 在上面的案例当中，如果路径中指定的参数为int,但是得到一个string的类型会报错--找不到页面
- 如果在urls.py当中为视图绑定了参数，如上面的<int:question_id>,参数的名字和视图当中的形参必须统一
- 因为这是以关键字参数的形式传递的，同时这里也必须为int类型的参数，当然也可以在urls.py当中取消int限制
- 上面的`app_name=vote`是为该应用的URL绑定了一个名称空间

## 数据库迁移

Django可以将数据模型绑定到数据库，并且动态修改数据库的结构，每次修改数据模型的时候都应还使用以下命令更新数据库
`migrate`命令会检查`INSTALLED_APPS`，并且为每一个应用创建数据表。

```shell
    python manage.py makemigrations
    python manage.py migrate
```

## 启动服务器

- 在控制台输入·python manage.py runserver`启动django服务器，如果在最后添加`:prot`则可以将服务器的端口号修改成指定的端口

## 管理员账户

### 新建管理员账户

```shell
    python manage.py createsuperuser
    # 新建管理员账户之后才能登录默认管理员界面
        127.0.0.1:8000/admin/
```

## 创建模型

模型是指应用中的`models.py`,用于服务器与数据库之间的交互，django屏蔽了底层数据库的差异，提供统一的方法创建数据模型。
在模型中，每个类都会创建一个数据库表，这个表中可以设置相关的数据的类型以及限制

```python
    # mytestapp/models.py
    from django.db import models

    class testClass(models.Model):
        question_id = models.CharField(max_length=200)
        pub_date = models.DateTimeFiled('date to published')
```

- 上面的案例会在数据库创建一个`<应用名>_<模型类名>`的数据表，其中会加入`question_id`、`pub_date`等数据字段
- django会在模型中的外键后添加`_id`
- 检查模型问题：`python manage.py check`

## 激活模型

- 在网站的`setting.py`文件的`INSTALLED_APPS`里面添加`<应用名>.apps.<应用名+Config>` , eg: `book.apps.bookConfig`

## 模板

- 在网站的`setting.py`中设置的`TEMPLATES`规定了Django的模板如何渲染，其中的`APP_DIRS=True`规定了在每个应用文件夹中查找`templates`子文件夹

### 模板命名空间

- 为了防止一个应用下有两个名字相同的模板，最好采用不同的子文件夹

```shell
    mytestapp/templates/mytestapp/index.html
    mytextapp/templates/mytestapp1/index.html
```

### 创建模板

- 在Django中的模板类似于JSP文件，在文件当中可以嵌入python语言，用于逻辑处理。在模板中使用`{{  }}`双层的大括号引用变量，类似于vue，在`{\%  \%}`当中添加python代码用于控制业务逻辑。

- 注意：for循环需要使用 `{\% endfor \%}`来终止循环

- 注意: 需要使用`{\% endif \%}`来终止if语句块，但是这个标记应该出现在最后的else之后

### 模板案例

- 在该案例当中使用了`last_question_lis`这个变量，来自于视图层渲染时提供的字典参数

``` python
    {% if last_question_lis %}
        <h1>显示查询结果页面</h1>
        <ul>
            {% for question in last_question_lis %}
            <li><a href="/vote/{question.id}/result">{{ question.question_text }}</a></li>
            {% endfor %}
            <!-- endfor 语法，用于终止for循环 -->
        </ul>
        {% else %}
        <p>No polls are available.</p>
    {% endif %}
```

### 模板的视图层处理--方法一

- 在该方法中需要用到`django.template.loader`用于渲染页面，该方式返回的是一个渲染之后的HTML文件

```python
    def lastTemplate(request):
        last_question_lis = Question.objects.order_by('pub_date')[:5]
        temp = loader.get_template("vote/index.html")
        context = {
            'last_question_lis':last_question_lis
        }
        print(type(last_question_lis))
        return HttpResponse(temp.render(context, request))
```

### 模板的视图层处理--方法二

- 在该方法中需要用到`django.shortcuts.render`，该方法返回的是一个已经渲染完成的HttpResponse对象

```python
    def lastRender(request):
        last_question_lis = Question.objects.order_by("pub_date")[:5]
        context = {
            "last_question_lis":last_question_lis
        }
        return render(request, 'vote/index.html', context=context)
```

- 注意：上面两种方式当中的`context`是一个字典，在模板当中使用字典中的值的时候只需要用到字典的键，

## 404错误

- 在请求的网页出现问题时，返回`404状态码`是必须的，下面是一个案例。

```python
    # /vote/views.py
    from django.http import Http404
    from django.shortcuts import render
    from .models import Question

    def detail(request, question_id):
        try:
            question = Question.objects.get(pk=question_id)
        except Question.DoesNotExist:
            raise Http404("Question does not exist")
        return render(request, 'polls/detail.html', {'question': question})
```

## 视图层

- 在视图层使用`request.POST`，可以访问到传递给视图层的使用POST方式传递的参数。
- 在视图层中也可以使用`request.GET`，访问传递给视图层的使用GET方式传递的参数
- 上面的参数以字典的形式访问

## 快捷函数

- Django将一些影响耦合性的模块存放在`django.shortcuts`当中

## get_object_or_404

- 在视图层获取一个模型层对象，如果不存在则返回404

## 去除模板中的硬编码

- 在模板中需要使用到视图的URL的时，可以直接使用在`urls.py`中给每个视图指定的`name`属性，eg：

```python
    <li><a href="{\% url 'vote:detail' question.id \%}">{{question.question_text}}</a></li>
```

- `'vote:detail'`中的单引号，同时`url 'vote:viewName'`必须放在最前面，后面紧接它的参数，上面的`vote`是应用的名称空间，当有多个名字相同的视图时，需要指明名称空间

## 表单

```python
    <form action="{% url 'vote:detail' question.id %}" method="post">
        {% csrf_token %}
        {% for choice in question.choice_set.all %}
        <input type="radio" name="choice" id="choice{{ forloop.counter }}" value="{{ choice.id }}">
        <label for="choice{{ forloop.counter }}">{{ choice.choice_text }}</label><br>
        {% endfor %}
        <input type="submit" value="Vote">
    </form>
```

- 其中的`{% csrf_token %}`是必须的用于防止`跨站脚本攻击`

- `{{ forloop.counter }}`指示`for`循环的次数`ds`

- 当需要更改服务器端数据的时候应该设置表单`method="post"`
