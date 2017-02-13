import { TrustedCirclePage } from './app.po';

describe('trusted-circle App', function() {
  let page: TrustedCirclePage;

  beforeEach(() => {
    page = new TrustedCirclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
