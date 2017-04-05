import { PunchstarterPage } from './app.po';

describe('punchstarter App', () => {
  let page: PunchstarterPage;

  beforeEach(() => {
    page = new PunchstarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
