import { ScenarioWorld } from './setup/world';
import { When } from '@cucumber/cucumber';

When(/^they are on the "([^"]*)" page$/, async function (this: ScenarioWorld, pageRoute: string) {
  const {
    screen: { page }
  } = this;

  await page.goto(`${process.env.BASE_URL}/${pageRoute}`);
});
When(/^they are on the “My Dashboard” page$/, function () {});
