import { WorkoozPage } from './app.po';

describe('workooz App', function() {
  let page: WorkoozPage;

  beforeEach(() => {
    page = new WorkoozPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wkz works!');
  });
});
