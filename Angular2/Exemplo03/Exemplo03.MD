MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ npm init -y
Wrote to /Users/eduardoalexandre/Dropbox/Developer/www/Estudos-Javascript/Angular2/Exemplo03/package.json:

{
  "name": "Exemplo03",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}


MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ 

MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ npm install

//Configuração do Typescript
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ touch tsconfig.json
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ 

//Criando o peimeiro component
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ mkdir app
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ cd app
MacBook-Pro-de-Eduardo:app eduardoalexandre$ ls
MacBook-Pro-de-Eduardo:app eduardoalexandre$ touch app-component.ts
MacBook-Pro-de-Eduardo:app eduardoalexandre$ 

//Criando um arquivo de inicialização com Angular 2
MacBook-Pro-de-Eduardo:app eduardoalexandre$ touch boot.ts
MacBook-Pro-de-Eduardo:app eduardoalexandre$ ls
app-component.ts  boot.ts
MacBook-Pro-de-Eduardo:app eduardoalexandre$ 

//Criando a Index
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ touch index.html
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ ls
Exemplo03.MD   app/           index.html     node_modules/  package.json   tsconfig.json

//Compilando e executando a aplicação
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ npm start

//Executando os arquivos
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ npm run tsc

> Exemplo03@1.0.0 tsc /Users/eduardoalexandre/Dropbox/Developer/www/Estudos-Javascript/Angular2/Exemplo03
> tsc

MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ 

//Executar o arquivo em modo de esculta (Alterar e Executar)
MacBook-Pro-de-Eduardo:Exemplo03 eduardoalexandre$ npm run tsc:w

> Exemplo03@1.0.0 tsc:w /Users/eduardoalexandre/Dropbox/Developer/www/Estudos-Javascript/Angular2/Exemplo03
> tsc -w

9:52:28 PM - Compilation complete. Watching for file changes.





