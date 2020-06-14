#language: pt
@home
Funcionalidade: Acessar a Home
    Eu, como usuário, quando acessar a url do site, quero visualizar a Home

    Cenario: CT001 - Carregar a home
        Dado que acesso a url "https://po-ui.io"
        Quando a página é carregada
        Entao eu visualizo o texto de boas vindas
