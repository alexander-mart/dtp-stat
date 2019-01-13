# Generated by Django 2.0 on 2018-04-14 03:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dtpmapapp', '0004_auto_20180414_0557'),
    ]

    operations = [
        migrations.AddField(
            model_name='mvc',
            name='region',
            field=models.ForeignKey(blank=True, default=None, help_text='MVC region', null=True, on_delete=django.db.models.deletion.SET_NULL, to='dtpmapapp.Region'),
        ),
    ]