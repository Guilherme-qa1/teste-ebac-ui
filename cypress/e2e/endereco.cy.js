///<reference types = "cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page';
///import EnderecoPage from '../support/page-objects/endereco.page'
const infoEndereco = require('../fixtures/endereco.json')
const infoEntrega = require('../fixtures/entrega.json')

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

    it('Deve fazer cadastro de faturamento com sucesso - Usando Arquivo de Dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            infoEndereco[0].nome,
            infoEndereco[0].sobrenome,
            infoEndereco[0].empresa,
            infoEndereco[0].pais,
            infoEndereco[0].endereco,
            infoEndereco[0].numero,
            infoEndereco[0].cidade,
            infoEndereco[0].estado,
            infoEndereco[0].cep,
            infoEndereco[0].telefone,
            infoEndereco[0].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de ENTREGA com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            infoEntrega[0].nome,
            infoEntrega[0].sobrenome,
            infoEntrega[0].empresa,
            infoEntrega[0].pais,
            infoEntrega[0].endereco,
            infoEntrega[0].numero,
            infoEntrega[0].cidade,
            infoEntrega[0].estado,
            infoEntrega[0].cep
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});