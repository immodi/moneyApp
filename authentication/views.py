from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import json
from django.contrib.auth.models import User
from validate_email import validate_email

class UserNameValidationView(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data['username']

        if not str(username).isalnum(): 
            return JsonResponse({"username_error": 'Username Should only contain AlphaNumeric characters'}, status=400)
        if User.objects.filter(username=username).exists(): 
            return JsonResponse({"username_error": 'Username already in use'}, status=409)
        return JsonResponse({"username_vaild": True})

class EmailValidationView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data['email']

        if not validate_email(email): 
            return JsonResponse({"email_error": 'Email is invalid'}, status=400)
        if User.objects.filter(email=email).exists(): 
            return JsonResponse({"email_error": 'Email already in use'}, status=409)
        return JsonResponse({"email_vaild": True})


class RegistrationView(View):
    def get(self, request):
        return render(request, "authentication/register.html")