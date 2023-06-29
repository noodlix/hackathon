# Generated by Django 4.2.2 on 2023-06-29 20:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Historical_Figures",
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
                ("name", models.CharField(default="Kazakh Figure", max_length=100)),
                ("image_url", models.URLField(max_length=300)),
                ("birth_year", models.IntegerField()),
                ("content", models.CharField(max_length=500)),
            ],
        ),
    ]
