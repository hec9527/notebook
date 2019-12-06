"""mywebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path 有4个参数 两个必须参数：route 和 view，两个可选参数：kwargs 和 name
    #    route URL的匹配准则  用于匹配路径
    #    view  视图的路径
    #    kwargs 传递任意个关键字给视图函数
    #    name  给URL 取一个别名方便在任意地方使用它
    path('admin/', admin.site.urls),
    path("vote/", include("vote.urls"))
]
