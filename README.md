# nestjs-react

If you want to give it a try, just:

```
docker-compose up -d
```

### Using with k8s

Test locally using Kind (https://kind.sigs.k8s.io/).

- Backend: </br>
  1 - ` kubectl apply -f k8s/backend/deploy.yml` </br>
  2 - ` kubectl expose -f k8s/backend/deploy.yaml` </br>
  3 - ` kubectl port-forward service/backend 3000:3000` </br>

- Frontend: </br>
  1 - ` kubectl apply -f k8s/frontend/deploy.yml` </br>
  2 - ` kubectl expose -f k8s/frontend/deploy.yml` </br>
  3 - ` kubectl port-forward service/frontend 3001:3000` </br>
