<div align="center">
	<img src="readme/logo.svg" alt="Ecoleta logo" height="90">
</div>
<br/>
<br/>
<div align="center">
  <img src="readme/mobile.gif" alt="Ecoleta mobile" height="280">
  <br/>
  <br/>
  <img src="readme/web.gif" alt="Ecoleta web" height="380">
</div>




<p>
  <a href="#-sobre-o-projeto">💡 Sobre o projeto</a>
  <br/>
  <a href="#-tecnologias">🛸 Tecnologias</a>
   <br/>
  <a href="#-minhas-alterações">🧪 Minhas alterações</a>
   <br/>
  <a href="#-como-utilizar">⚙️ Como utilizar</a>
   <br/>
  <a href="#-variáveis-de-ambiente">🧩 Variáveis de ambiente</a>
   <br/>
  <a href="#-scripts">🤖 Scripts</a>
   <br/>
  <a href="#-como-contribuir">🖖🏻 Como contribuir</a>
   <br/>
  <a href="#-license">📝 License</a>
</p>



# 💡 Sobre o projeto



O Ecoleta é uma solução que permite o cadastro de pontos de coletas por meio de uma página web e a divulgação destes pontos no aplicativo móvel.

<div align="center">
	<img src="readme/home-background.svg" alt="Ecoleta" height="220">
</div>
Desenvolvido durante a **Next Level Week #01**, créditos a [Rocketseat 🚀
](https://github.com/Rocketseat)

# 🛸 Tecnologias

* NodeJS

* ReactJS

* React Native

* Expo

* TypeScript

  

# 🧪 Minhas alterações

- Back-end:
  - Adicionei o Eslint e Prettier
  - Adicionei um filtro no Multer para aceitar apenas imagens com tamanho máximo de 1MB
  - Criei validações para todas as rotas utilizando o Celebrate
  - Adicionei o Jest ao projeto e escrevi testes de integração para todas as rotas bem como criei um banco de dados exclusivo para os testes
  - Adicionei variáveis de ambiente
- Front-end:
  - Adicionei Eslint e Prettier
  - Criei validações para todos campos do formulário usando o Yup
  - Criei validação para o tamanho da imagem
  - Alterei o favicon
  - Adicionei variáveis de ambiente
- Mobile:
  - Adicionei o Eslint e Prettier
  - Adicionei os selects na tela inicial utilizando o react-native-picker-select
  - Integrei a API do IBGE para buscar os nomes dos estados e cidades
  - Adicionei variáveis de ambiente




# ⚙️ Como utilizar

Clone o repositório:

```
git clone 
```

Instale as dependências:

📁./backend

```
yarn install
```
📁./frontend

```
yarn install
```
📁./mobile

```
yarn install
```



**Desenvolvimento**

**Backend:**

```
yarn dev
```

**Web:**

```
yarn dev
```

Mobile:

```
yarn dev
```



 **Produção**

...

 **Teste**

**Backend**:

```
yarn test
```



# 🧩 Variáveis de ambiente

**Backend**

- `HOST`: avc

- `PORT`: Selecione a porta em que deseja rodar a API

- `IP`: abc

- `STORAGE_TYPE`: abc

**Frontend**

* `REACT_APP_BASE_URL`: acvb

**Mobile**

* `BASE_URL`: abv

  

# 🤖 Scripts

**Backend:**

- `dev`: Roda a aplicação em modo de desenvolvimento
- `test`: Roda os testes automatizados
- `knex:migrate`: Roda as migrations
- `knex:seed`: Roda os seeds

**Frontend:**

- `start`: Roda a aplicação

**Mobile:**

- `start`: Roda a aplicação



# 🖖🏻 Como contribuir

- Faça um fork desse repositório;
- Clone esse repositório em sua máquina: ``
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.



# 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.