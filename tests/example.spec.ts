import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test('link to about page then go back to home', async ({ page }) => {
  // qase.id(111)
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Go to about page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();

  await page.goBack();
  
  await expect(page).toHaveTitle('Create Next App');
});

test.skip('Test with steps (edited)', async () => {
  qase.id(14);
  qase.title('Test with steps (edited)');
  await test.step('Step 1', async () => {
    expect(true).toBe(true);
  });
  await test.step('Step 2', async () => {
    expect(true).toBe(true);
  });
  expect(true).toBe(true);
});