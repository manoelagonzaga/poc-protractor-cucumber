import { browser } from "protractor";

export class Utils {

    /**
     * Acessa a url informada ou a url cadastrado no parametro baseUrl no arquivo protractor.conf.js
     * @param url - Url que deseja acessar, se diferente de baseUrl
     */
    navigateTo(url: string = browser.baseUrl) {
        return browser.get(`${url}`);
    }

    /**
     * Retorna a url atual, no browser
     */
    getCurrentUrl() {
        return browser.getCurrentUrl();
    }
}