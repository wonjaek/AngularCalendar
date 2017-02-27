import { AngularCalendarPage } from './app.po';

describe('angular-calendar App', () => {
  let page: AngularCalendarPage;

  beforeEach(() => {
    page = new AngularCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
