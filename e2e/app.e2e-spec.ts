import { CarformPage } from './app.po';

describe('carform App', function() {
  let page: CarformPage;

  beforeEach(() => {
    page = new CarformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
