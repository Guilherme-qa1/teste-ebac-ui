/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.fixture('dadosAprende').then(aprende => {
        cy.loginAprende(aprende.usuario, aprende.senha, {log: false})
    })
});

describe('Reforçar o conhecimento', () => {
    it('Deve codar corretamente', () => {

    })
});