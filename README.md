# nestjs-react

If you want to give it a try, just:
```
docker-compose up -d
```

### Desafio - 3 

Você NÃO precisa utilizar um Cloud Provider como AWS, GCP e Azure para realizar essa tarefa. Você pode realizar localmente a instalação do cluster utilizando o Kind (https://kind.sigs.k8s.io/).

- Para rodar o backend: </br>
1 - ` kubectl apply -f k8s/backend/deployment.yml` </br>
2 - ` kubectl apply -f k8s/backend/service.yml` </br>

- Para executar o frontend: </br>
1 - ` kubectl apply -f k8s/frontend/deployment.yml` </br>
2 - ` kubectl apply -f k8s/frontend/service.yml` </br>
