import { by, element, ElementFinder, promise } from 'protractor';

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
    getPageTitle(): promise.Promise<string> {
        return  this.pageTitle.getText();
    }

    pageTitleIsDisplayed(): promise.Promise<boolean> {
        return this.pageTitle.isDisplayed();
    }

    clickOnBtnMenu(): promise.Promise<void> {
        return this.btnMenu.click();
    }

    getSpecificMenuItem(menuItem: string): promise.Promise<string> {
        return this.menuItem(menuItem).getText();
    }

    clickOnSpecificMenuItem(menuItem: string): promise.Promise<void> {
        return this.menuItem(menuItem).click();
    }
}