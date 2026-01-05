//Tests for tests/saucedemo_inventory.spec.ts :

import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'; 

//Import JSON DATA
import * as users from '../data/users.json';

test.describe('Add to Cart Scenario', () => {

    //Declare both page object

    let loginPage : LoginPage;
    let inventoryPage : InventoryPage


    test.beforeEach(async ({page}) => {

        // Initialize both with the same page (Depedency injection)

        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        //Perform the login (Prerequiste)
        await loginPage.goto()
        console.log("User is at the login page currently")


        //THE HYBRID LOGIN
        //Username comes from JSON (userData.standard.username)
        //Password comes from ENV (process.env.SAUCE_PASSWORD)



        const password = process.env.SAUCE_PASSWORD || '';

        await loginPage.login(users.standard.username, password);
        console.log("The user has successfully logged in")

    });

    test ('User should be able to add Backpack and see the cart badge update', async({page}) => {
        //STEP 1 : Verify we are on the Inventory Page 
        //We use the 'pageTitle' locator we defined

        await expect(inventoryPage.pageTitle).toHaveText('Products');

        //Step 2 : We are adding the backpack item

        await inventoryPage.addBackpackToCart();


        //We use standart Playwright assertion to check the variable

        await expect(inventoryPage.cartBadge).toHaveText('1');

        //STEP 4: Go to the Cart Page 

        await inventoryPage.goToCart();

        //Step 5 : Verify URL

        await expect(page).toHaveURL(/cart/) ;

    })

    
})

