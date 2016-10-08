import { browser, element, by } from 'protractor';

export class WorkoozPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wkz-root h1')).getText();
  }
}
