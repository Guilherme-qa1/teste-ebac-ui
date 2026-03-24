///<reference types = "cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario,dados.senha)
    }) 
});

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
    });

});