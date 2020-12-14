import { expect } from 'chai';
import { After, Given, Then, When } from "cucumber";
import { Home } from "../page-objects/home-page.po";
import { Utils } from "../page-objects/utils.po";

const utils = new Utils();
const home = new Home();

After(async () => {
  await home.clickOnProfile();
  await home.clickOnLogout();
});

Given('que eu estou logado no Meu RH', async () => {
  await utils.navigateTo('url');
  await home.setUserName('user');
  await home.setPassword('password');
  await home.clickOnLogin();
});

When('acesso a home com perfil de colaborador', async () => {
  expect(await home.getHomeTitle()).to.equal('Olá, MANOELA');
});

Then('o card de {string} é exibido para o colaborador com a descrição {string}', async (cardName: string, cardDescription: string) => {

  switch (cardName) {
    case 'aniversariantes do mês':
      expect(await home.getBithdayPersonsFromCard()).to.equal(cardDescription);
      break;

    case 'recibo de pagamento':
      expect(await home.getReceiptPaymentFromCard()).to.equal(cardDescription);
      break;

    case 'banco de horas':
      const qtHoras = cardDescription.split('_')[0];
      const description = cardDescription.split('_')[1];

      expect(await home.getHoursFromCard()).to.equal(qtHoras);
      expect(await home.getHoursTypeFromCard()).to.equal(description);
      break;

    case 'informe de rendimento':
      expect(await home.getReportIncome()).to.equal(cardDescription);
      break;
  }
});
