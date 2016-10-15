##Instalação do HTTPS server
➜  ~ git:(master) ✗ npm i -g http-server

##Run
➜  BeMeanInstagran git:(master) ✗ http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://10.0.0.5:8080
Hit CTRL-C to stop the server

##Usando o reverse com split(Console do Chrome)
>"abcdefgh".split("")
<["a", "b", "c", "d", "e", "f", "g", "h"]
>"abcdefgh".split("").reverse()
<["h", "g", "f", "e", "d", "c", "b", "a"]
>"abcdefgh".split("").reverse().join("")
<"hgfedcba"
##Criando tabela(Atalho)
table>thead>(tr>td)+tbody>(tr>td)