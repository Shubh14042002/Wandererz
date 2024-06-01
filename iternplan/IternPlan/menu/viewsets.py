
# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from menu.models import Destination

from menu.serializers import  DestinationSerializer


# class MenuViewSet(viewsets.ModelViewSet):
#     queryset = Destination.objects.all()
#     serializer_class = DestinationSerializer
#     permission_classes = [AllowAny]

class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer