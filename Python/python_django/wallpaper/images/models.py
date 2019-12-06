from django.db import models

class images(models.Model):
    url = models.CharField(max_length=256)
    size = models.CharField(max_length=5)
    resolution = models.CharField(max_length=10)
    direction = models.CharField(max_length=1)
    classify = models.CharField(max_length=30)
    tag = models.CharField(256)
    cached = models.BooleanField(default=False)
    url_local = models.CharField(max_length=256)
    dislike = models.IntegerField(default=0)
    dislike_usr = models.IntegerField(default=0)
    likeNum = models.IntegerField(default=0)
    saveTime = models.models.TimeField(_(auto_now=False, auto_now_add=False)

    def insert(self, url, size, resolution, direction, classify, tag, cached, \
         url_local, dislike, dislike_usr, likeNum, saveTime):
        import datetime
        url=url
        saveTime = datetime.date.today()


