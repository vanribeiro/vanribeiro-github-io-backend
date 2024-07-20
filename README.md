# Back-end: site [vanribeiro.github.io](https://vanribeiro.github.io/)

## Conteúdo
1. [Motivação](#motivação)
2. [Tecnologias](#tecnologias)
3. [Uso](#uso)

## Motivação
Atualmente, meu site está hospedado no Github Pages e o serviço oferecido por eles só permite hospedar páginas estáticas. Como eu queria manter a hospedagem ali, o repositório público e também queria consumir alguns serviços de terceiros, como a `API` do Instagram, por exemplo, tive que procurar outra alternativa, já que algumas `APIs` fornecem uma chave de acesso, que, para mim, tem o mesmo nível de senha e deve ser protegida.

Na primeira versão, usei `NodeJS` com `ExpressJS` para criar uma `API`, que fazia as consulta usando as chaves de `API`, mas começou a apresentar alguns problemas de compatibilidade com o serviço da Vercel, especialmente com a versão do `NodeJS` que eu estava utilizando. 

Então, optei por fazer um upgrade do `NodeJS` e também migrar de `ExpressJS` para `Serveless Function` da Vercel.

## Tecnologias 

- [NodeJS](https://nodejs.org/en/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Vercel](https://vercel.com/)
- [Jest](https://jestjs.io/)

## Uso

### `localhost`

1. Instale todas as dependências: `npm install`

#### Executando a aplicação

1. Se ainda não tiver instalado, instale o pacote da `Vercel`: `npm i -g vercel`
2. Então, execute `vercel dev`
3. A aplicação ficará disponível em `http://localhost:3000`

#### Testes

Os comandos configurados são:

- `npm run test` - sem coverage
- `npm run test:coverage` - com coverage
- `npm run test:watch` - sem coverage e com `--watchAll` habilitado

## Posts que me ajudaram nesta implementação

- [Como "esconder" a chave de uma API antes de colocar o projeto no GitHub?](https://pt.stackoverflow.com/questions/477756/como-esconder-a-chave-de-uma-api-antes-de-colocar-o-projeto-no-github)
