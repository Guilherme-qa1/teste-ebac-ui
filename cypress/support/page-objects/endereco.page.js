class EnderecoPage {
        editarEnderecoFaturamento(){
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
            cy.get(':nth-child(1) > .title > .edit').click()
            cy.get('[name="billing_first_name"]').clear().type('teste')
            cy.get('[name="billing_last_name"]').clear().type('carro')
            cy.get('[name="billing_company"]').clear().type('nissan')
            cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        }

        editarEnderecoEntrega(){

        }
}

export default new EnderecoPage()