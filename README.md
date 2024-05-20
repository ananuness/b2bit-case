<div align=center>
  <img src="./src/assets/b2bit-logo.png" alt="b2bit logo" width="256px">

  <h1>Case técnico Frontend</h1>

  <p>
    Case técnico para a vaga de Desenvolvedor Frontend React Jr. na empresa 
    <a href="https://www.linkedin.com/company/b2bit-company/">b2bit</a>.
  </p>

  <p>
    <a href="#clipboard-descrição">Descrição</a> •
    <a href="#electric_plug-como-rodar">Como rodar</a> •
    <a href="#rocket-tecnologias">Tecnologias</a> •
    <a href="#sparkles-features">Features</a>
  </p>
</div>

## :clipboard: Descrição

O case consiste em uma aplicação na qual o usuário possa realizar o _login_ e,
caso autenticado, irá ser redirecionado para a _Home_, onde poderá visualizar
suas informações a qualquer momento graças à autenticação via JWT token. Além
disso, o usuário tem a possibilidade de fazer o _logout_ da sua conta, removendo
seus dados do armazenamento do navegador.

## :electric_plug: Como rodar

Para prosseguir, garanta que tem instalado o [Node.js](https://nodejs.org/en) >= 16.0
e o [git](https://git-scm.com/downloads) para esse passo a passo:

1. Clone o projeto para sua máquina:

```bash
# SSH
git clone git@github.com:ananuness/b2bit-case.git

# https
git clone https://github.com/ananuness/b2bit-case.git
```

2. Vá até a pasta do projeto e instale as dependências:

```bash
# acessando a pasta do projeto
cd b2bit-case

# instalando todas as dependências
npm install
```

3. Defina as variáveis de ambiente requeridas encontradas no arquivo
   `.env.example` e mude o nome do arquivo para apenas `.env` ou `.env.local`.

4. Rode o projeto em modo de desenvolvimento:

```bash
npm run dev
```

## :rocket: Tecnologias

- [Obrigatório] [Typescript](https://www.typescriptlang.org/) para tipagem no Javascript
- [Obrigatório] [Reactjs](https://react.dev/) para desenvolvimento de interfaces nativas e web
- [Obrigatório] [Axios](https://axios-http.com/ptbr/docs/intro) para facilitar o gerenciamento de requisições e respostas
- [Obrigatório] [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/) para os testes
- [React Router](https://reactrouter.com/en/main) para gerenciamento de rotas
- [Tailwindcss](https://tailwindcss.com/) para estilização
- [Formik](https://formik.org/) para fácil gerenciamento de formulários no react
- [Yup](https://github.com/jquense/yup) para validações
- [Vite](https://vitejs.dev/) para criação do projeto React
- [Vercel](https://vercel.com/) para deploy

## :sparkles: Features

- [x] Tela de Sign in
- [x] Validação dos campos do formulário
- [x] Feedbacks de erros e carregamentos
- [x] JWT token para autenticação
- [x] Tela de Perfil do usuário
- [x] Logout do usuário

<hr>

<p align="center">
  Made with 💛 by
  <a href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>
