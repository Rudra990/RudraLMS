from rest_framework import serializers
from userauths.models import Profile,User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainSerializer(TokenObtainPairSerial):
  @classmethod
  def 

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = "__all__"