import {type Locator, type Page} from '@playwright/test' ;

export class LoginPage {
    //The variables

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logo: Locator;
    readonly errorMessage: Locator;
    readonly productsTitle: Locator;

    //The constructor

    constructor(page: Page) {
        this.page = page;

        // We define the locators here once.

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.logo = page.locator('.login_logo');
        this.errorMessage = page.locator('[data-test="error"]');
        this.productsTitle = page.locator('.title');
    }

    //Action: Go to the website

    async goto() {
        await this.page.goto('https://saucedemo.com/')
    }

    //Action : Perform the Login

    async login(username: string, pass: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async clickLogin() {

        await this.loginButton.click();
    }

    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }
} 