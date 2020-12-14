/*
import { browser, by, element, Key } from 'protractor';
import { expect } from 'chai';

describe('Dado que eu acesso a página do portinari', () => {

  it('Então a página inicial é exibida', () => {
    browser.get('https://po-ui.io');
    expect(browser.getCurrentUrl()).to.equal('https://po-ui.io/');
    expect(element(by.css('h1 ~ .library ')).getText()).to.equal('Biblioteca de componentes baseado em Angular');
  });

  it('Então clico no menu, e o menu de componentes é exibido', () => {
    element(by.className('po-menu-mobile')).click();
    const menuItem = element(by.cssContainingText('.po-menu-item', 'Componentes'));
    expect(menuItem.isDisplayed()).to.be.true;
  });

  it('Então clico no menu de componentes e é exibido a lista de componentes', () => {
    element(by.cssContainingText('.po-menu-item', 'Componentes')).click();
    expect(element.all(by.css('.po-list-view')).count()).to.be.greaterThan(0);
  });

  it('Então busco pelo componente combo', () => {
    element(by.css('.po-page-list-filter-wrapper input')).sendKeys('combo', Key.ENTER);
    expect(element.all(by.css('.po-list-view .po-list-view-title')).first().getText()).to.equal('Combo');
  });

  it('Então clico para visualizar a documentação do combo', () => {
    element.all(by.css('.po-list-view .po-list-view-title')).first().click();
    element(by.cssContainingText('.po-tabs-header .po-tab-button-label', 'Exemplos')).click();
    expect(element(by.css('sample-po-combo-basic po-combo input')).isDisplayed()).to.be.true;
  });

  it('Então clico no combo e visualizo a lista de itens', () => {
    element(by.css('sample-po-combo-basic po-combo input')).click();
    expect(element.all(by.css('sample-po-combo-basic po-combo .po-combo-item')).count()).to.equal(2)
  });

  it('Então digito um texto e os itens são filtrados', () => {
    element(by.css('sample-po-combo-basic po-combo input')).sendKeys('Option 2');
    expect(element.all(by.css('sample-po-combo-basic po-combo .po-combo-item')).count()).to.equal(1)
    expect(element.all(by.css('sample-po-combo-basic po-combo .po-combo-item')).get(0).getText()).to.equal('Option 2')
  });
});
*/