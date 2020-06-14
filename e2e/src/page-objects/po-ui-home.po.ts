import { by, element, ElementFinder } from 'protractor';

export class HomePage {

    // Atributos
    private pageTitle: ElementFinder = element(by.css('h1 ~ .library '));
    private btnMenu: ElementFinder = element(by.className('po-menu-mobile'));
    private menuItem(menuItem: string): ElementFinder {
        return element(by.cssContainingText('.po-menu-item', `${menuItem}`));
    }

    // Comportamentos

    /**
     * Retorna o título principal (h1) da página inicial
     */
    getPageTitle() {
        return  this.pageTitle.getText();
    }

    pageTitleIsDisplayed() {
        return this.pageTitle.isDisplayed();
    }

    clickOnBtnMenu() {
        return this.btnMenu.click();
    }

    getSpecificMenuItem(menuItem: string) {
        return this.menuItem(menuItem).getText();
    }

    clickOnSpecificMenuItem(menuItem: string) {
        return this.menuItem(menuItem).click();
    }
}