# nestjs-react

If you want to give it a try, just:

```
docker-compose up -d
```

### Desafio - 3

Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).

- Para rodar o backend: </br>
  1 - ` kubectl apply -f k8s/backend/deploy.yml` </br>
  2 - ` kubectl expose -f k8s/backend/deploy.yaml` </br>
  3 - ` kubectl port-forward service/backend 3000:3000` </br>

- Para executar o frontend: </br>
  1 - ` kubectl apply -f k8s/frontend/deploy.yml` </br>
  2 - ` kubectl expose -f k8s/frontend/deploy.yml` </br>
  3 - ` kubectl port-forward service/frontend 3001:3000` </br>
