import { test, expect } from '@playwright/test';

const URL = 'https://saucedemo.com/';
const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('SauceDemo Login Tests', () => {

  // Runs before every test
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('1. should display correct logo', async ({ page }) => {
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');

    console.log('Logo verified')
  });

  test('2. Should login successfully with valid credentials', async ({ page }) => {

    await page.getByPlaceholder('Username').fill(USERNAME);
    await page.getByPlaceholder('Password').fill(PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('.title')).toHaveText('Products');
    console.log("User is able to login successfully");
  });

  // Negative tests
  test.describe('Negative Login Scenarios', () => {

    test('3. Error message should appear when fields are empty', async ({ page }) => {

      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page).toHaveURL(/saucedemo\.com\/?$/);

      const errorMessage = page.locator('[data-test="error"]');
      await expect(errorMessage).toBeVisible();
      await expect(errorMessage).toHaveText('Epic sadface: Username is required');
    });

    test('4. Should show error when password is missing', async ({ page }) => {

      await page.getByPlaceholder('Username').fill(USERNAME);
      await page.getByRole('button', { name: 'Login' }).click();

      const errorMessage = page.locator('[data-test="error"]');
      await expect(errorMessage).toHaveText('Epic sadface: Password is required');
    });

    test('5. Should show error when username is missing', async ({ page }) => {

      await page.getByPlaceholder('Password').fill(PASSWORD);
      await page.getByRole('button', { name: 'Login' }).click();

      const errorMessage = page.locator('[data-test="error"]');
      await expect(errorMessage).toHaveText('Epic sadface: Username is required');
    });

    test('6. Should show error on trying to login with wrong credentials', async ({ page })=> {

        await page.getByPlaceholder('Username').fill('wrong_user');
        await page.getByPlaceholder('Password').fill('wrong_pass');
        await page.getByRole('button', {name: 'Login'}).click();

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toHaveText(/Epic sadface: Username and password do not match any user in this service/) ;

        console.log('Error message displayed correctly')
});


    })

  });

