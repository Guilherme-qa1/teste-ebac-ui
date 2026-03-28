///<reference types = "cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const infoEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Felipe', 'Pinheiro', 'Ebac', 'Brasil', 'Av. São João', '1234', 'Mongaguá', 'São Paulo', '11730-000', '11999999999', 'felipe@fake.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            infoEndereco[1].nome,
            infoEndereco[1].sobrenome,
            infoEndereco[1].empresa,
            infoEndereco[1].pais,
            infoEndereco[1].endereco,
            infoEndereco[1].numero,
            infoEndereco[1].cidade,
            infoEndereco[1].estado,
            infoEndereco[1].cep,
            infoEndereco[1].telefone,
            infoEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});