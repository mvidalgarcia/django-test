from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("employees", views.EmployeeViewSet, basename="employee")

urlpatterns = [
    path("", views.index, name="index"),
    path("hello/", views.hello_api, name="hello-api"),
    path("", include(router.urls)),
]
