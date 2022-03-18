/// <reference types="cypress" />


describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
       

        cy.get('.product-block')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 4)
        cy.get('.woocommerce-message').should('contain' , '4 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        
});

});