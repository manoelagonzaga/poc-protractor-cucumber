import { by, element, ElementArrayFinder } from 'protractor';

export class ComponentsPage {

    // Atributos
    private allComponents: ElementArrayFinder = element.all(by.css('.po-list-view'));

    //Comportamentos

    /**
     * Retorna a quantidade de itens na listagem de componentes
     */
    countDisplayedComponents() {
        return this.allComponents.count();
    }

}