from django.urls import path
from . import views

app_name = "vote"
urlpatterns = [
    path("", views.index, name="index"),
    path("<int:question_id>/", views.detail, name="detail"),
    path("<int:question_id>/result/", views.result, name="result"),
    path("<int:quesiotn_id>/vote1/", views.vote, name="vote"),
    path("<int:num>/result/<int:num1>/", views.myTest, name="result1"),
    path("lastTemplate/", views.lastTemplate),
    path("lastRender/", views.lastRender),
    # path("")
]
