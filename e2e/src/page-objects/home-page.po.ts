import { by, element } from 'protractor';

export class Home {

  private inputUserName = element(by.css('app-login [name=user] input'));
  private inputPassword = element(by.css('app-login [name=password] input'));
  private buttonProfile = element(by.css('.top-bar-profile > div > div'));
  private buttonLogout = element(by.css('#logout-button'));
  private buttonLogin = element(by.css('app-login .login-button button'));
  private title = element(by.css('app-home h1'));
  private qtyHours = element(by.css('.card-balance-summary .hour-time'));
  private hoursType = element(by.css('.card-balance-summary .hour-balance'));
  private receiptPayment = element(by.css('.card-balance-summary .hour-balance'));
  private reportIncome = element(by.css('.card-balance-summary .hour-balance'));
  private birthdayPerson = element(by.css('.card-balance-summary .hour-balance'));

  async setUserName(userName: string): Promise<void> {
    await this.inputUserName.sendKeys(userName);
  }

  async setPassword(password: string): Promise<void> {
    await this.inputPassword.sendKeys(password);
  }

  async clickOnLogin(): Promise<void> {
    await this.buttonLogin.click();
  }

  async clickOnProfile(): Promise<void> {
    await this.buttonProfile.click();
  }

  async clickOnLogout(): Promise<void> {
    await this.buttonLogout.click();
  }

  async getHomeTitle(): Promise<string> {
    return await this.title.getText();
  }

  async getHoursFromCard(): Promise<string> {
    return await this.qtyHours.getText();
  }

  async getHoursTypeFromCard(): Promise<string> {
    return await this.hoursType.getText();
  }

  async getBithdayPersonsFromCard(): Promise<string> {
    return await this.birthdayPerson.getText();
  }

  async getReceiptPaymentFromCard(): Promise<string> {
    return this.receiptPayment.getText();
  }

  async getReportIncome(): Promise<string> {
    return this.reportIncome.getText();
  }
}