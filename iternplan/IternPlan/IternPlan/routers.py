# ./routers.py

from rest_framework import routers

from menu.viewsets import DestinationViewSet

router = routers.SimpleRouter()

router.register(r'destinations', DestinationViewSet)

urlpatterns = router.urls