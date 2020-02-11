# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
import os
import sys

from django.shortcuts import render

from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt

from django.conf import settings


# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


from .models import *


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return


class FetchPersonasAPI(APIView):
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication)

    def post(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
            print "In feth personas"
            personas = Persona.objects.all()
            response['personas'] = []
            for persona in personas:
                temp_dict = {}
                temp_dict["id"] = str(persona.pk)
                temp_dict["name"] = str(persona.name)
                temp_dict["email"] = str(persona.email)
                temp_dict["roleType"] = str(persona.role_type.role_type)
                temp_dict["status"] = [str(persona.status.status)]
                temp_dict["action"] = str(persona.pk)
                temp_dict["mobileNumber"] = str(persona.mobile_number)
                response['personas'].append(temp_dict)
            response['status'] = 200
        except Exception as e:
            import os
            exc_type, exc_obj, exc_tb = sys.exc_info()
            print("FetchPersonas: %s at %s",
                  e, str(exc_tb.tb_lineno))
        return Response(data=response)


FetchPersonas = FetchPersonasAPI.as_view()


class CreatePersonaAPI(APIView):
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication)

    def post(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500
        try:
            data = request.data

            name = data.get("name", "")
            if name == "":
                return Response(data=response)
            radio_value = data.get("radioValue", "ce")
            role_type = "Customer Executive"
            if radio_value == "ad":
                role_type = "Admin"
            role_type_obj = RoleType.objects.get(role_type=role_type)

            status_obj = Status.objects.get(status="Active")

            mobile_number = data.get("mobileNumber", "")
            email = data.get("email", "")

            persona = Persona.objects.create(
                name=name, role_type=role_type_obj, status=status_obj, email=email, mobile_number=mobile_number)

            response["status"] = 200

        except Exception as e:
            import os
            exc_type, exc_obj, exc_tb = sys.exc_info()
            print("FetchPersonas: %s at %s",
                  e, str(exc_tb.tb_lineno))
        return Response(data=response)


CreatePersona = CreatePersonaAPI.as_view()


class EditPersonaAPI(APIView):
    authentication_classes = (
        CsrfExemptSessionAuthentication, BasicAuthentication)

    def post(self, request, *args, **kwargs):
        response = {}
        response['status'] = 500

        try:
            data = request.data["userData"]
            key = request.data["key"]
            persona = Persona.objects.get(pk=key)
            print data

            if persona:
                name = data.get("name", "")
                if name != "":
                    persona.name = name

                email = data.get("email", "")
                if email != "":
                    persona.email = email
                mobile_number = data.get("mobileNumber", "")
                if mobile_number != "":
                    persona.mobile_number = mobile_number

                role_type_code = data.get("radioValue", "")
                if role_type_code != "":
                    role_type_obj = RoleType.objects.get(
                        code=role_type_code)
                    persona.role_type = role_type_obj

                status_code = data.get("radioValueStatus", "")
                if status_code != "":
                    status_obj = Status.objects.get(code=status_code)
                    persona.status = status_obj
                persona.save()

                response["status"] = 200

        except Exception as e:
            import os
            exc_type, exc_obj, exc_tb = sys.exc_info()
            print("EditPersonaAPI: %s at %s",
                  e, str(exc_tb.tb_lineno))
        return Response(data=response)


EditPersona = EditPersonaAPI.as_view()
