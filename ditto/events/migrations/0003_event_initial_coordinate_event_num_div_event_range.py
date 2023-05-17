# Generated by Django 4.1.7 on 2023-05-17 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_recordinglog_alertlog'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='initial_coordinate',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='num_div',
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name='event',
            name='range',
            field=models.IntegerField(default=1000),
        ),
    ]
