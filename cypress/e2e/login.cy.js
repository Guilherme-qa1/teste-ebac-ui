/// <reference types="cypress" />

context ('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () =>{

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        
    })

     it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('[name="username"]').type('_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

     it('Deve exibir uma mensagem de erro ao inserir senha invalida', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste@teste')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    })
    

})