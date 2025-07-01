const { timeout } = require("async")

describe('Central de Atendimento ao Cliente TAT', () => {
beforeEach(() => {
  cy.visit('./src/index.html')

})

  it('verificar o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {

  })

it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  const dataInvalid = {
    firstName: 'Weberton',
    lastName: 'RAFAEL SILVA',
    email: 'Webertonrs@gmail',
    test: 'teste',
  }
  cy.InvalidFormatting(dataInvalid)
  cy.get('.error').should('be.visible')

  })

it('campo telefone continua vazio quando preenchido com um valor não-numérico telefone', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')

  })

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName').type('Weberton')
    cy.get('#lastName').type('RAFAEL SILVA')
    cy.get('#email').type('Webertonrs@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()
  
    cy.get('.error').should('be.visible')

  })
  
it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Weberton')
      .should('have.value','Weberton')
      .clear()
      .should('have.value','')
    cy.get('#lastName')
      .type('RAFAEL SILVA')
      .should('have.value','RAFAEL SILVA')
      .clear()
      .should('have.value','')
    cy.get('#email')
      .type('Webertonrs@gmail.com')
      .should('have.value','Webertonrs@gmail.com')
      .clear()
      .should('have.value','')
    cy.get('#open-text-area')
      .type('teste')
      .should('have.value','teste')
      .clear()
      .should('have.value','')

  }) 

it('enviar o formulario com sucesso', () => {
    const dataForm = {
      firstName: 'joao',
      lastName: 'RAFAEL SILVA',
      email: 'Webertonrs@gmail.com',
      test: 'teste'
    }
  cy.fillMandatoryFieldsAndSubmit(dataForm)

  cy.get('.success').should('be.visible')

  })

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
  cy.displayErrorMessageBeforeSubmission()
  cy.get('.error').should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')

  })

  it('seleciona um produto (Blog) por seu valor', () => {
    cy.get('#product')
      .select('Blog')
      .should('have.value', 'blog')

  })
  it.only('seleciona um produto (blog) por seu indice',() => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')

  })




})


