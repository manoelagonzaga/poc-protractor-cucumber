#language: pt
@cards-home
Funcionalidade: Exibição da home
  Eu, como usuário, quero visualizar as informações de pagamento, aniversariantes do mês e banco de horas quando acessar a home

  Contexto:
    Dado que eu estou logado no Meu RH
    Quando acesso a home com perfil de colaborador

  Esquema do Cenario: Visualizo o card de "<Card>" na Home
    Então o card de "<Card>" é exibido para o colaborador com a descrição "<CardDescription>" 

    Exemplos:
      | Card                   | CardDescription                                |
      | aniversariantes do mês | Manoela e Jefferson fazem aniversário este mês |
      | recibo de pagamento    | Seu pagamento já está disponível               |
      | banco de horas         | +100:43_Horas extras                           |
      | informe de rendimento  | Seu informe de rendimentos já está disponível  |