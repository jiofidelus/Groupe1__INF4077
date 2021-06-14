from . import views
from django.urls import path

urlpatterns = [
    path("", views.index),
    path("displayQueryResults/", views.displayQueryResults, name="displayQueryResults"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("update/", views.update, name="update"),
    path("", views.home, name="home"),
    path("result/", views.result, name="result"),
    path("updateOnto/", views.updateOnto, name="updateOnto"),
    path("verify/",views.verify,name="verify")
    
]

