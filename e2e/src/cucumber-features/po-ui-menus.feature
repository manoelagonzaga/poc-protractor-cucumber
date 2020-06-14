#language: pt
@menus
Funcionalidade: Redirecionamento dos menus
    Eu, como usuário, quero ser direcionada para a página quando clicar em um item de menu, para acessar o conteúdo deste menu
    # Quem?
    # O que?
    # Por quê?

    #Contexto:
    #    Dado que estou na página inicial
    #    Quando clico no menu

    Cenario: CT002 - Exibição da página Componentes
        E clico no item de menu "Componentes"
        Entao é exibido a lista de componentes

    Cenario: CT003 - Exibição da pagina Guias
        E clico no item de menu "Guias"
        Entao é exibido a tela de primeiros passos

    @wip
    Esquema do Cenario: Direcionar para as páginas quando clicar no menu
        Dado que estou na página inicial
        Quando clico no menu
        E clico no item de menu "<ItemDeMenu>"
        Entao é exibido a página "<Pagina>"

        Exemplos:
            | ItemDeMenu  | Pagina           |
            | Componentes | API Reference    |
            | Guias       | Primeiros passos |
            | Ferramentas | Dynamic Form     |