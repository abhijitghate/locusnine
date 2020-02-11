# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class RoleType(models.Model):
    role_type = models.CharField(
        max_length=250, blank=True, null=True, default="")
    code = models.CharField(max_length=250, blank=True, null=True, default="")

    def __str__(self):
        return self.role_type


class Status(models.Model):
    status = models.CharField(
        max_length=250, blank=True, null=True, default="")
    code = models.CharField(max_length=250, blank=True, null=True, default="")

    def __str__(self):
        return self.status


class Persona(models.Model):

    name = models.CharField(max_length=250, blank=True, null=True, default="")
    email = models.CharField(max_length=250, blank=True, null=True, default="")
    mobile_number = models.CharField(
        max_length=250, blank=True, null=True, default="")
    role_type = models.ForeignKey(RoleType, null=True, blank=True, default="")
    status = models.ForeignKey(Status, blank=True, null=True, default="")

    def __str__(self):
        return self.name
