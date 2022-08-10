# Backend

## Libs

1. Prisma, cors, Express, Jest, Supertest, Nodejs, uuid, bcrypt, celebrate, dotenv, express-async-errors, iscpf, jsonwebtoken, ts-node-dev, typescript

Decidi usar o prisma pela agilidade e facilidade em fazer os relacionamentos.
Typescript porque uso no meu dia a dia e garante mais segurança e qualidade no produto.
Celebrate para validar os dados antes de chegar no service

## Melhorias

Validar se o user for do tipo estudante a lista mostraria apenas o nome dos estudfantes,
se for admin ai sim os dados completos como CPF e RA seria exibidos.
Apenas usuário do tipo admin poderia cadastrar um novo estudante.
Apenas user admin pode excluir uma conta.
Colocaria uma telinha de login

## Dica
No update do usuário só poderia alterar o email, tendo em vista que um nome sempre será vinculado ao cpf.

## Requisitos que não foram entregues
Nenhum todo o CRUD foi feito e testado.
