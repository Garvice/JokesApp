import { VslivePage } from './app.po';

describe('vslive App', function() {
  let page: VslivePage;

  beforeEach(() => {
    page = new VslivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
