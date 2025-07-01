Cypress.Commands.add('fillMandatoryFieldsAndSubmit', dataForm => {
    cy.get('#firstName').type(dataForm.firstName)
    cy.get('#lastName').type(dataForm.lastName)
    cy.get('#email').type(dataForm.email)
    cy.get('#open-text-area').type(dataForm.test)
    cy.contains('button', 'Enviar').click()

})

Cypress.Commands.add('displayErrorMessageBeforeSubmission', () => {
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')

})

Cypress.Commands.add('InvalidFormatting', dataInvalid => {
    cy.get('#firstName').type(dataInvalid.firstName)
    cy.get('#lastName').type(dataInvalid.lastName)
    cy.get('#email').type(dataInvalid.email)
    cy.get('#open-text-area').type(dataInvalid.test)
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

})

