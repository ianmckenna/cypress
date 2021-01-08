class PurchaseFlow {

    foodSensitivity = 'https://www.everlywell.com/products/food-sensitivity/';
    prodQuantity = '[data-testid=productQuantity]';
    addCart = '[data-testid=addToCartButton]';
    cartContent = '[data-testid=cart-content]';
    cartQuantity = '[data-testid=cart-item-quantity]';
    checkoutLink = '[data-testid=checkout-link]';

    getFoodSens() {
        cy.visit(this.foodSensitivity);
        cy.get(this.prodQuantity).select('5');
        cy.get(this.addCart).click();
        cy.expect(cartContent).to.exist;
        cy.expect(this.cartQuantity).to.eql('5');
        cy.get(this.checkoutLink).click();
    }

    checkDiscount() {
        //this is where i would have checked for the volume discount
    }

}