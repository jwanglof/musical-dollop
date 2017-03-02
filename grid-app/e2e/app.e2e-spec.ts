import { GridAppPage } from './app.po';

describe('grid-app App', function() {
  let page: GridAppPage;

  beforeEach(() => {
    page = new GridAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
