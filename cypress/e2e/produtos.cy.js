/// <reference types = "cypress"/>

context('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });
    
    it.only('Deve adicionar produto ao carrinho', () => {
        var quantidade = 10
        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

});