import {type Page, type Locator} from '@playwright/test';

export class InventoryPage {
    readonly page : Page;
    readonly pageTitle: Locator
    readonly cartIcon: Locator;
    readonly cartBadge: Locator 
    // Just add one product for now (say Backpack) :

    readonly backpackAddToCartButton : Locator ;


constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title')
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');

    this.backpackAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
}

//Method 1 clicking on the add to cart button for a specific item only named backpack

async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
}

async goToCart() {
    await this.cartIcon.click()
}

}
