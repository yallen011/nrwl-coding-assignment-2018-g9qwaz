import { AppPage } from './app.po';
import { element, by, browser, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let tickets;

  beforeEach(() => {
    page = new AppPage();
    this.tickets = element.all(by.tagName('app-support-ticket'));
  });

  it('should display Heading "Ticket"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tickets');
  });

  it('should contain 2 tickets', () => {
      expect(this.tickets.count()).toBe(2);
  });

  it('should create new ticket', () => {
    element(by.id('description')).sendKeys('Fix Broken Mac');
    element(by.partialButtonText('Add')).click();
    expect(this.tickets.count()).toBe(3);
    expect(this.tickets.last().getText()).toContain('Fix Broken Mac');

  } );

  it('should navigate to Support Details page', () => {
    const ticket = this.tickets.first();
    ticket.click();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('details'), 5000);
  });
});
