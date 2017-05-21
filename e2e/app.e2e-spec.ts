import { ForForroAppPage } from './app.po';

describe('for-forro-app App', () => {
  let page: ForForroAppPage;

  beforeEach(() => {
    page = new ForForroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
