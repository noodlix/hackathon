# Generated by Django 4.2.2 on 2023-06-29 17:05

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="item", max_length=100)),
                ("img_url", models.URLField(max_length=300)),
                ("price", models.IntegerField()),
            ],
        ),
    ]