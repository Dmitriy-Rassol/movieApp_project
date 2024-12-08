from django.db import models

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    poster = models.URLField()
    year = models.PositiveIntegerField()
    duration = models.PositiveIntegerField()

    def __str__(self):
        return self.title