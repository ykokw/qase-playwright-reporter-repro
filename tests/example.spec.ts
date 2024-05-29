import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test('link to about page', async ({ page }) => {
  qase.id(11)
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Go to about page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
});
