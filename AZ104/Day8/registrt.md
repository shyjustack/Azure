```
docker pull nginx
docker login shyju.azurecr.io
docker tag nginx:latest shyju.azurecr.io/nginx:latest
docker push shyju.azurecr.io/nginx:latest
```
