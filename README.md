<h1 align="center">
    Class website
</h1>
 
<h4 align="center"> 
	📗▶ Class-website ▶📗
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/paulobeckman/Class-website?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/paulobeckman/Class-website">

  	
  <a href="https://www.linkedin.com/in/paulobeckman/">
    <img alt="Made by paulobeckman" src="https://img.shields.io/badge/made%20by-paulobeckman-%2304D361">
  </a>
	
  
  <a href="https://github.com/paulobeckman/rocketseat-courses/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/paulobeckman/Class-website">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/paulobeckman/Class-website/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/paulobeckman/Class-website?style=social">
  </a>
</p>


## 💻 Sobre o projeto

📗▶ Class website - apresenta as informações sobre um aluno, além de poder redirecionar para todas as redes sociais dele. Além disso, o site conta com um sistema de cadastro de Professores e Alunos, afim de ter um melhor controle sobre os alunos e professores da sua instituição.


Na aba Sobre:
 - O usuário poderá ser redirecionado para acessar o GitHub, LinkedIn e Twitter do aluno.
 
 
 
 
Na aba Aulas:
- o aluno tem acesso a seis cards referentes a vídeos do youtube da [Rocketseat](rs);
- cada card tem uma thumbnail, título, tempo de duração e se o curso e pago ou gratuito;
- ao clicar em cada card, o usuário irá para uma página dedicada para aquele vídeo escolhido, com url específica. Nessa página o usuário pode assitir o vídeo.



Na aba Professor:
 - Os professores poderão se cadastrar na plataforma web enviando:
   - url de uma imagem 
   - seu nome completo
   - data de nascimento
   - grau de Escolaridade
   - tipo de aula
   - área de atuação



Na aba Aluno:
 - Os alunos poderão se cadastrar na plataforma web enviando:
   - url de uma imagem 
   - seu nome completo
   - email
   - data de nascimento
   - ano escolar
   - carga horária semanal

Além de fazer cadastro o sistema permite visualizar os dados, fazer edição e deletar. 

O sistema armazena todas as informações no banco de dados postgres.

Também o sistema conta com um sistema de filtro por nome ou atendimento no caso dos Professor. E nome ou email no caso do aluno. Além do sistema de filtro o sistema conta com paginação exibindo 2 perfis de usuário por pagina, seja professor, seja aluno.

Projeto desenvolvido como desafio no curso **LaunchBase** oferecida pela [Rocketseat](rs).
"O [LaunchBase](lb) é um treinamento no formato de bootcamp online que tem duração de 8 semanas. A cada semana os conteúdos são liberados de acordo com um cronograma, guiando o aluno pelas ferramentas e conceitos mais modernos de desenvolvimento que permitirão construir as melhores aplicações e ter acesso às melhores oportunidades como programador." - Rocketseat


### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
	
 <img alt="Class-website" title="#Class-website" src="./github-assets/Class-website.gif" width="800px">
 
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina1.png" width="400px">

  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina2.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina3.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina4.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina5.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina6.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina7.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina8.png" width="400px">

  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina9.png" width="400px">
  
  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina10.png" width="400px">

  <img alt="Class-website" title="#Class-website" src="./github-assets/pagina11.png" width="400px">

  
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Java Script][js]
- [CSS][CSS]
- [HTML][HTML]
- [Nunjucks][Nunjucks]
- [Unsplash Source][API]
- [Postgres][pg]


## 🚀 Como rodar este projeto
 
Podemos considerar este projeto como sendo divido em duas partes:
1. Back End (arquivos server.js, routes.js, script.js e pastas controllers, models, config e lib) 
2. Front End (pasta views e arquivo styles.css)

💡Tanto o Front End quando o Back End irão rodar assim que a aplicação for iniciada.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação web (Front End e Back End)

```bash
# Clone este repositório
$ git clone https://github.com/paulobeckman/Class-website.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Class-website

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```


## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](license) para saber mais.

Feito por Paulo Beckman 👋🏽 [Entre em contato!](https://www.linkedin.com/in/paulobeckman/)

[nodejs]: https://nodejs.org/
[vscode]: https://code.visualstudio.com/
[license]: https://opensource.org/licenses/MIT
[rs]: https://rocketseat.com.br
[lb]: https://pages.rocketseat.com.br/launchbase/inscricao/5
[js]: https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript
[CSS]: https://developer.mozilla.org/pt-BR/docs/Web/CSS
[HTML]: https://developer.mozilla.org/pt-BR/docs/Web/HTML
[Nunjucks]: https://www.npmjs.com/package/nunjucks
[API]: https://source.unsplash.com/
[pg]: https://www.postgresql.org/

