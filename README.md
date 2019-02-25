Esta API foi desenvolvida com NodeJS em conjunto com o framework serverless

### Node app.js

Para iniciar a aplicação em dev

### Use o postman para testar a API e prod

O deploy da API foi feito na AWS (API gateway) com serverless

### Endpoints: 


Lista de noticias (GET): [https://https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/news/'](https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/news/')

Noticia (GET): [https://https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/news/1'](https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/news/1')

Adiciona like (PUT): [https://https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/newsLikes'/1](https://wlzdm90cda.execute-api.us-east-1.amazonaws.com/v1/newsLikes/1')


*substitua 1 por um id

### Banco de dados:

os dados foram armazenados no serviço da Amazon RDS

as especs do banco de dados mysql está em config/table_data_export