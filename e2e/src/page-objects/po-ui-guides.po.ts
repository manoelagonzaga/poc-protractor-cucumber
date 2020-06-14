
import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class GuidePage {

    // Atributos
    private pageTitle: ElementFinder = element(by.className('po-page-header-title'));


    // Comportamentos

    /**
     * Retorna o título da página
     */
    getPageTitle() {
        return  this.pageTitle.getText();
    }
    

}