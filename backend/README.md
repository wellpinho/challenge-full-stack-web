# após clonar o projeto

1. `cd backend`
2. `yarn`
3. configurar os dados do banco postgres para acesso ao seu banco
4. `yarn dev`

## Rotas para usar via postman ou insomnia

1. listar estudantes: http://localhost:4000/users
2. listar estudante: http://localhost:4000/users/:id
3. Criar estudante: http://localhost:4000/users
4. Atualizar estudante: http://localhost:4000/users/:id
5. Deletar estudante: http://localhost:4000/users/:id

## dados do body formato json:

```
{
  "name": String,
  "email": String,
  "RA": Number,
  "CPF": String,
}
```
