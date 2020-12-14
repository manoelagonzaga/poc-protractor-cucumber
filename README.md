# Automação de testes com Protractor e Cucumber

## Para iniciar o projeto
 - git clone
 - npm install
 - crie as pastas:
 	- e2e/reports/json
	- e2e/reports/html
	- e2e/reports/screenshot


## Para execução dos testes: 
> npm run test

## Para gerar os métodos bdd
> npm run test -- --cucumberOpts.dry-run

Obs: Os testes não serão realmente executados, o cucumber irá simular uma execução para verificar se todos os métodos estão implementados e se não há erros de implementação.

## Para executar um teste específico
Basta incluir uma tag (@nome-da-tag) acima do cenario que deseja executar ou da funcionalidade, e incluí-la na propriedade cucumberOpts.tags no arquivo protractor.conf.js  
