"Este repositório refere-se a prova de front-end do [Processo Seletivo para Analista Desenvolvedor](https://drive.google.com/file/d/1u18xzDJv15Nbp8Y0VkAg_vlbxMjgzReL/view), promovido pela Polícia Judiciária Civil de Mato Grosso, do candidato Everton Henrique Oliveira Kunz"

# The Cocktail Finder

The Cocktail Finder trata-se de uma aplicação web, construída com o poderoso framework front-end [VueJS](https://vuejs.org/), consumindo à API gratuíta [TheCocktailDB](https://www.thecocktaildb.com/api.php).

## Versão Live da Aplicação

Você pode dar uma olhada na aplicação aqui: [TheCocktailFinder](https://thecocktailfinder.surge.sh/). O deploy foi feito no [Surge](https://surge.sh/).

## Tecnologias Utilizadas

 - [VueJS vs2](https://vuejs.org/): Framework JS front-end;
 - [Vue-router](https://router.vuejs.org/): Router oficial usado pelo Vue.js;
 - [Vue-fortawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome): Implementação da famosa galeria de ícones Font-Awesome, para VueJS;

 Não foi utilizado nenhuma biblioteca de componentes visuais ou framework CSS, sendo assim todos os estilos e componentes visuais foram feitos sob demanda para o projeto.

## Rodando o Projeto Localmente

 - Clone este repositório 
 ```
 git clone https://github.com/tonkunz/thecocktailfinder-app.git
 ```

- Navegue até a rais do projeto
```
cd thecocktailfinder-app
```

- Instale as dependências
```
npm install
```

- Rode o projeto localmente
```
npm run serve
```

- A aplicação deve abrir em http:\\localhost:8080 (Atente-se ao terminal)


## Dockerizando a Aplicação

Este projeto já acompanha um DockerFile para, caso deseje, criar uma imagem e subir um container em Docker. Não há muitos segredos nesta tarefa e você pode entender mais na própria documentação do Vue cliquando [aqui](https://br.vuejs.org/v2/cookbook/dockerize-vuejs-app.html);
