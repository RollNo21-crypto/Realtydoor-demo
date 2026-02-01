import { test, expect } from '@playwright/test';

test.describe('Property Browsing Flow', () => {
    test('should display properties on homepage', async ({ page }) => {
        await page.goto('/');

        // Check hero section
        await expect(page.locator('h1')).toContainText('Premium Property');

        // Check featured properties section
        await expect(page.locator('text=The Selection')).toBeVisible();

        // Verify property cards are displayed
        const propertyCards = page.locator('[data-testid="property-card"]').or(page.locator('a[href^="/properties/"]'));
        await expect(propertyCards.first()).toBeVisible();
    });

    test('should navigate to property detail page', async ({ page }) => {
        await page.goto('/properties');

        // Click on first property
        await page.locator('a[href^="/properties/"]').first().click();

        // Verify property detail page loaded
        await expect(page).toHaveURL(/\/properties\/.+/);
        await expect(page.locator('h1')).toBeVisible();
    });

    test('should submit contact form', async ({ page }) => {
        await page.goto('/properties');
        await page.locator('a[href^="/properties/"]').first().click();

        // Fill contact form
        await page.fill('input[name="name"]', 'Test User');
        await page.fill('input[name="email"]', 'test@example.com');
        await page.fill('textarea[name="message"]', 'I am interested in this property.');

        // Submit form
        await page.click('button[type="submit"]');

        // Verify success message
        await expect(page.locator('text=successfully')).toBeVisible({ timeout: 5000 });
    });
});
