▶ npm install -g ionic@5.4.5 cordova@9.0.0
##Install
▶ ionic start IonicreactSpaceX
##Install Ionic Lab
▶ ionic serve -l
##Setup Prettier .prettierrc.js
module.exports = {
semi: false,
trailingComma: 'all',
singleQuote: true,
printWidth: 80,
tabWidth: 2,
}
▶ npx prettier --write "src/\*_/_.{ts/tsx,css}"
##Setup Apollo
▶ npm i apollo-boost@0.4.4 @apollo/react-hooks@3e.1.3 graphql@14.5.8

##https://graphql-code-generator.com/docs/getting-started/
▶ yarn add -D @graphql-codegen/cli
▶ npx graphql-codegen init
##Setup https://zeit.co/
▶ npm i -D now@16.4.4
▶ npm i now@latest
▶ npx now login
▶ npx now secrets add react-app-api-url "https://api.spacex.land/graphql/"
