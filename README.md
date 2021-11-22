# O que é uma tecnologia de SPA? Cite detalhes dessa abordagem e as principais tecnologias de mercado.
A sigla SPA vem de Single Page Applications, ou Aplicações de Página Única. Apesar de o nome permitir a dedução, isso não significa que a aplicação terá apenas uma única página.<br>

## Como aplicações SPA funcionam?
De maneira geral, em uma aplicação SPA, o carregamento dos recursos (como CSS, JavaScript e HTML das páginas) ocorre apenas uma única vez: na primeira vez em que o usuário acessa a aplicação. Nesse primeiro acesso, todo o conteúdo HTML, CSS e JavaScript já é transferido para o cliente. A partir deste momento, quando o usuário transitar pelas páginas da aplicação, não será necessário mais fazer requisições para o servidor para a carga dessas novas páginas: o conteúdo relacionado a elas já foi baixado no primeiro acesso. O que acontece nesse momento é que o conteúdo da página é carregado via JavaScript, código este que é justamente gerado com base nos frameworks SPA, como Angular, React e Vue.js. 

Por isso, dizemos que o processamento do carregamento das páginas e seus respectivos recursos passa para o cliente, já que JavaScript é uma linguagem majoritariamente client side. <br>

## Como e onde utilizar?
Atualmente, aplicações SPA podem ser utilizadas em praticamente todas as situações, o que explica bastante a popularização de frameworks SPA como Angular, React, Vue.js e Ember na atualidade.

# Qual sua maior motivação para utilizar uma biblioteca/framework de SPA para construir uma aplicação de front-end?
Quando se fala em SPA, o primeiro ponto que precisamos entender é: JavaScript. É ele quem vai controlar suas rotas, fazer suas requests, trabalhar os seus dados e sua aplicação passará a ter mais poder e autonomia.

Embora SPA tenha suas desvantagens, existem muitas razões para querer usar. Não é à toa que é o modelo de aplicações front-end mais utilizado da atualidade.

Existem inúmeros frameworks destinados a trabalhar com SPA, porém, atualmente destacam-se três: VueJs, React e Angular.

A curva de aprendizado desses frameworks varia de acordo com seu conhecimento em JavaScript. Entre eles o VueJs é o mais utilizado no mercado.

# O que é Typescript e qual a vantagem de adicioná-lo em um projeto?
TypeScript é uma linguagem que estende os recursos atuais do JavaScript com a possibilidade de adicionar tipos estáticos predefinidos na sua aplicação, em tempo de compilação.

Uma das maiores vantagens da TypeScript é possibilitar que os IDEs proporcionem um ambiente mais seguro, ao apontar erros enquanto o código é digitado pelo usuário. A linguagem TypeScript adiciona tipagem estática ao JavaScript, que, originalmente, possui tipagem dinâmica.

# Cite exemplos de formas de autenticação ao consumir APIs de terceiros.
O desenvolvimento e consumo de APIs torna-se cada vez mais constante, especialmente por parte de grandes organizações, afinal a possibilidade de integração de dados é bem atrativa. Entretanto a proteção, segurança e integridade das APIs ainda preocupam qualquer pessoa que trabalhe com elas, e não é para menos, já que um volume altíssimo de dados sensíveis trafegam por elas diariamente.

### Autenticação e autorização
Provavelmente esta seja a principal preocupação quando estamos falando da segurança de APIs, afinal ninguém gostaria de sofrer o roubo se suas credenciais.
Para garantIr o acesso o acesso a sua API, é importante que você implemente padrões de autenticação e autorização.

### OAuth2
É um protocolo que oferece acesso limitado a recursos de um website sem que os usuários tenham que expor suas credenciais. O OAuth2 tem se firmado como uma das principais formas de autorizar acesso a determinado recurso, principalmente quando tal acesso deve ser concedido pelo próprio usuário. Grandes empresas como Google, Facebook, Twitter e LinkedIn já adotaram esse padrão de autenticação.

### OpenID Connect
Este é um protocolo de identidade simples e um padrão aberto. O OpenID Connect foi desenvolvido com base no protocolo OAuth 2 . A partir dele aplicativos de clientes dependem
da autenticação executada pelo OpenID Connect Provider (OP), a fim de verificar a identidade de um usuário.

### App Token / JWT
Trata-se de uma chave-de autenticação que identifica o seu cadastro. Ela é necessária para utilizar as APIs disponibilizadas no sistema. Nem preciso dizer o quão importante é a não divulgação da sua chave de acesso, já que através dela podem ser realizadas consultas de informações, que você prefere não divulgar.

### SSL/TLS
O certificado SSL (Secure Sockets Layer) aumenta a segurança digital, protegendo suas informações por meio de comunicação criptografada entre a API e navegador. Tal tecnologia, apesar de eficaz, vem sendo continuamente substituída pelo TLS (Transport Layer Security). 


# Sistema de Listagem dos repositórios de um usuário do Github
Esse repositório tem a finalidade de apresentar um pequeno sistema de pesquisa de usuários do Github.

## Características do sistema
O sitema foi criado com HTML, JavaScript e CSS.

## Execução

Por meio do método GET usaremos para buscar as informações. Conforme o link abaixo e copie para o navegador.

[https://api.github.com/users/aws/repos]


Após ter a lista dos repositórios é hora de criar o formulário em HTML, CSS e JavaScript. Baixe os arquivos do projeto.

## Para a busca no sistema

Digite no campo de pesquisa somente o nome do usuário do Github. 
Ex: nomedosuario

> Lembre-se! Náo funciona copiando a url completo do usuario.

## Contribuição
Deseja enviar correções de alguma tradução? Só efetuar um pull-request deste repositório e efetuar a alteração dentro de uma nova branch (que não seja a `master`).<br />

Qualquer dúvida entre em contat: [marciojlbarros@gmail.com](marciojlbarros@gmail.com).<br />

[@marciojlbarros](https://github.com/marciojlbarros)