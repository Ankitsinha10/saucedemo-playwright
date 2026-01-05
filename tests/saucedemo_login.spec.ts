import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage' ;

//Import the Data
import * as users from '../data/users.json' ;

//password variable

const PASSWORD = process.env.SAUCE_PASSWORD || '';
const USERNAME = users.standard.username ;

test.describe('SauceDemo Login Tests', () => {

  //Define the variable globally for this group

  let loginPage: LoginPage;

  // Runs before every test
  test.beforeEach(async ({ page }) => {

    //Initiate the Remote Control

    loginPage = new LoginPage(page);

    // Use the remote to go to the site

    await loginPage.goto();
   
  });

  test('1. should display correct logo', async ({ page }) => {
    await expect(loginPage.logo).toHaveText('Swag Labs');
    console.log('Logo verified')
  });

  test('2. Should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(USERNAME, PASSWORD);

    await expect(loginPage.productsTitle).toHaveText('Products')
    console.log("User is able to login successfully");
  });

  // Negative tests

test.describe('Negative Login Scenarios', () => {

  test('3. Error message should appear when fields are empty', async({page}) => {

    await loginPage.clickLogin();
    await loginPage.expectToBeOnLoginPage()
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
  });

  test('4. Should show error when password is missing', async() => {
    await loginPage.fillUsername(USERNAME);
    await loginPage.clickLogin();

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
  })

  test('5. Should show error when username is missing', async () => {
    await loginPage.fillPassword(PASSWORD);
    await loginPage.clickLogin()

    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
  })

  test ('6. Should show error on trying to login with wrong credentials', async() => {
    await loginPage.login('wrong_user', 'wrong_password')

    await expect(loginPage.errorMessage).toHaveText(/Epic sadface: Username and password do not match any user in this service/)

    console.log('Error message is displayed correctly')
  } ); 
});

});