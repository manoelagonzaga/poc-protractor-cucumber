# Automação de testes com Protractor e Cucumber

## Para iniciar o projeto

> - git clone
> - npm install
> - crie as pastas:
>   - e2e/reports/json
>   - e2e/reports/html
>   - e2e/reports/screenshot

## Estrutura de pastas

> - e2e/src/cucumber-features - São armazenadas os arquivos de feature, que possuem os cenários escritos em gherkin
> - e2e/src/page-objects - São armazenados as páginas com os atributos e comportamentos de uma pági
> - e2e/src/specs - São armazenados os passos dos cenários da feature (step definitions)

## Para execução dos testes

> npm run test

## Para gerar os métodos bdd

> npm run test -- --cucumberOpts.dry-run

Obs: Os testes não serão realmente executados, o cucumber irá simular uma execução para verificar se todos os métodos estão implementados e se não há erros de implementação.

## Para executar um teste específico

Basta incluir uma tag (@nome-da-tag) acima do cenário que deseja executar ou da funcionalidade, e incluí-la na propriedade cucumberOpts.tags no arquivo protractor.conf.js  
