```
docker build -t testapp .
docker run -d testapp testapp -p 80:3000
docker ps
docker exec -it <container id> /bin/bash
```

