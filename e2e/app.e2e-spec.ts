import { MyTestAppPage } from './app.po';

describe('my-test-app App', function() {
  let page: MyTestAppPage;

  beforeEach(() => {
    page = new MyTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
