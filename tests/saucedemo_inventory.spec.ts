//Tests for tests/saucedemo_inventory.spec.ts :

import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'; 

const USERNAME = 'standard_user' ;
const PASSWORD = 'secret_sauce' ;

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
        console.log("User is at the homepage currently")

        await loginPage.login(USERNAME, PASSWORD);
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

