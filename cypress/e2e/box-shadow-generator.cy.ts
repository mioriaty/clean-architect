describe('Box Shadow Generator', () => {
  it('Create Layer', () => {
    cy.visit('http://127.0.0.1:8000/')

    cy.get('[data-create="create-layer"]')
      .should('exist')
      .should('have.text', 'Add Layer')

    cy.get('[data-create="create-layer"]').click()
  })
})
