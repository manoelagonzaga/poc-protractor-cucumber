import { use } from "chai";
import chaiPlugIn from "chai-as-promised";
import { Given, Then, When } from "cucumber";
import { ComponentsPage } from "../page-objects/po-ui-components.po";
import { GuidePage } from "../page-objects/po-ui-guides.po";
import { HomePage } from "../page-objects/po-ui-home.po";
import { Utils } from "../page-objects/utils.po";
const chai = use(chaiPlugIn);
const expect = chai.expect;
const homepage = new HomePage();
const utils = new Utils();
const componentsPage = new ComponentsPage();
const guidePage = new GuidePage();

Given('que acesso a url {string}', async function (url: string) {
    utils.navigateTo(url);
    expect(await utils.getCurrentUrl()).to.equal('https://po-ui.io/');
});

When('a página é carregada', async function () {
    expect(await homepage.pageTitleIsDisplayed()).to.be.true;
});

Then('eu visualizo o texto de boas vindas', async function () {
    expect(await homepage.getPageTitle()).to.equal('Biblioteca de componentes baseado em Angular');
});

Given('que estou na página inicial', function (callback) {
    utils.navigateTo().then(callback);
});

When('clico no menu', function (callback) {
    homepage.clickOnBtnMenu().then(callback);
});

When('clico no item de menu {string}', function (menuItem: string, callback) {
    homepage.clickOnSpecificMenuItem(menuItem).then(callback);
});

Then('é exibido a lista de componentes', async function () {
    expect(await componentsPage.countDisplayedComponents()).to.be.greaterThan(0);
});

Then('é exibido a tela de primeiros passos', async function () {
    expect((await guidePage.getPageTitle()).trim()).to.equal('Primeiros passos');
});

Then('é exibido a página {string}', async function (pageTitle: string) {
    expect((await guidePage.getPageTitle()).trim()).to.equal(pageTitle);
});
