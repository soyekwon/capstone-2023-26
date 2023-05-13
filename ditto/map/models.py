from django.db import models

# Create your models here.

class HeadCount(models.Model):
    row = models.IntegerField(null=False, blank=False)
    col = models.IntegerField(null=False, blank=False)
    update_time = models.DateTimeField(auto_now=True)
    event_id = models.ForeignKey("events.Event", on_delete=models.CASCADE)
    count = models.IntegerField(null=False, default=0)

    class Meta:
        ordering = ['id']