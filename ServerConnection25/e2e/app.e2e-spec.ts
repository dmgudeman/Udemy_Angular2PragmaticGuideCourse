import { ServerConnection25Page } from './app.po';

describe('server-connection25 App', function() {
  let page: ServerConnection25Page;

  beforeEach(() => {
    page = new ServerConnection25Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
