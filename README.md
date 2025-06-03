<h1 align="center"> API Refund </h1>

<p align="center">
Esta API foi desenvolvida como prática de conceitos fundamentais com Multer, permitindo criar utilizadores, pedidos de reembolso (refunds) e fazer uploads de ficheiros. <br/>
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## Tecnologias

- **TypeScript**
- **Express.js**
- **Zod** – validação de dados
- **SQLite** – base de dados local
- **Prisma ORM** – acesso à base de dados
- **JWT** – autenticação
- **Multer** – gestão de uploads de ficheiros

## Funcionalidades

- **Autenticação de Utilizadores**
  - Registo e login com JWT
  - Proteção de rotas privadas

- **Gestão de Refunds (Reembolsos)**
  - Criação de pedidos de reembolso por parte de utilizadores

- **Uploads de Ficheiros**
  - Upload e validação de ficheiros com Multer e Zod
  - Upload apenas para formatos permitidos e com limite de tamanho

> ⚠️ Este projeto foi criado para fins de aprendizagem, focando especialmente a integração do Multer com validações robustas usando Zod.

## Licença

Este projeto está sob a licença MIT.

---

