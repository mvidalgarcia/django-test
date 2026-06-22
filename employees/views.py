from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Employee
from .serializers import EmployeeSerializer

def index(request):
    return HttpResponse("Hello, world!")

@api_view(["GET"])
def hello_api(request):
    return Response({"message": "Hello from Django!"})

class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
