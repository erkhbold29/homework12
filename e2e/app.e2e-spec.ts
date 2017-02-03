import { MySecondAppPage } from './app.po';

describe('my-second-app App', function() {
  let page: MySecondAppPage;

  beforeEach(() => {
    page = new MySecondAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
