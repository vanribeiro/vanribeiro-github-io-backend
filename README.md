# Back-end: site [vanribeiro.github.io](https://vanribeiro.github.io/)

## Conteúdo
1. [Motivação](#motivação)
2. [Tecnologias](#tecnologias)

## Motivação
Atualmente, meu site está hospedado no Github Pages e o serviço oferecido por eles só permite hospedar páginas estáticas. Como eu queria manter a hospedagem ali, o repositório público e também queria consumir alguns serviços de terceiros, como a `API` do Instagram, por exemplo, tive que procurar outra alternativa, já que algumas `APIs` fornecem uma chave de acesso, que, para mim, tem o mesmo nível de senha e deve ser protegida.

Na primeira versão, usei `NodeJS` com `ExpressJS` para criar uma `API`, que fazia as consulta usando as chaves de `API`, mas começou a apresentar alguns problemas de compatibilidade com o serviço da Vercel, especialmente com a versão do `NodeJS` que eu estava utilizando. 

Então, optei por fazer um upgrade do `NodeJS` e também migrar de `ExpressJS` para `Serveless Function` da Vercel.

## Tecnologias 

- [NodeJS](https://nodejs.org/en/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [NodeFetch](https://www.npmjs.com/package/node-fetch)
- [Vercel](https://vercel.com/)

## Posts que me ajudaram nesta implementação

- [Como "esconder" a chave de uma API antes de colocar o projeto no GitHub?](https://pt.stackoverflow.com/questions/477756/como-esconder-a-chave-de-uma-api-antes-de-colocar-o-projeto-no-github)
- [Deploy Express.js app to Vercel ](https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb)
- [Using Express.js with Vercel - Learn how to use Express.js in a Serverless environment.](https://vercel.com/guides/using-express-with-vercel)
