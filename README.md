# Back-end: site [vanribeiro.github.io](https://vanribeiro.github.io/)

## Conteúdo
1. [Motivação](#motivação)
2. [Tecnologias](#tecnologias)

## Motivação
Atualmente, meu site está hospedado no Github Pages e o serviço oferecido por eles só permite hospedar páginas estáticas. Como eu queria manter a hospedagem ali, o repositório público e também queria consumir alguns serviços de terceiros, como a `API` do Instagram, por exemplo, tive procurar outra alternativa, já que algumas `APIs` fornecem uma chave de acesso, que, para mim, tem o mesmo nível de senha e deve ser protegida.

Após algumas pesquisas, uma das soluções que encontrei neste post, foi consumir as `APIs` no Back-End e devolver os dados através de um endpoint que pode ser consumido no Front-End. E foi o que fiz.

Então, lá fui relembrar como usar `NodeJS` com `ExpressJS` para criar uma `API`. O código ainda precisa de ajustes e melhorias, mas funciona e fornece o que eu preciso para ser ter os dados consumidos via Front-End.

## Tecnologias 

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [NodeFetch](https://www.npmjs.com/package/node-fetch)
- [Vercel](https://vercel.com/)

## Posts que me ajudaram nesta implementação

- [Como "esconder" a chave de uma API antes de colocar o projeto no GitHub?](https://pt.stackoverflow.com/questions/477756/como-esconder-a-chave-de-uma-api-antes-de-colocar-o-projeto-no-github)
- [Deploy Express.js app to Vercel ](https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb)
- [Using Express.js with Vercel - Learn how to use Express.js in a Serverless environment.](https://vercel.com/guides/using-express-with-vercel)