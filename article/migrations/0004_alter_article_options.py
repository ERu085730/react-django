# Generated by Django 3.2.5 on 2021-07-17 06:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_alter_article_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='article',
            options={'ordering': ['id', 'title', 'description', 'image']},
        ),
    ]
