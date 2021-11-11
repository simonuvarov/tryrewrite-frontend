describe('Landing Test', () => {
  it('should display home page', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' })
    cy.contains('Write. Check. Correct. Repeat.')
  })

  it('should display tos page', () => {
    cy.visit('http://localhost:3000/terms')
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' })
    cy.contains('Terms of Service')
  })

  it('should display privacy page', () => {
    cy.visit('http://localhost:3000/privacy')
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' })
    cy.contains('Privacy policy')
  })

  it('should redirect from signin to dashboard authenticated user', () => {
    cy.visit('http://localhost:3000/signin')
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' })
    cy.location('pathname').should('eq', '/dashboard')
  })

  it('should redirect from signup to dashboard authenticated user', () => {
    cy.visit('http://localhost:3000/signup')
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' })
    cy.location('pathname').should('eq', '/dashboard')
  })

  it('should show signin page to unauthenticated user', () => {
    cy.visit('http://localhost:3000/dashboard')
    cy.intercept('GET', '/api/profile', { statusCode: 401 })
    cy.location('pathname').should('eq', '/signin')
  })
})

export {}
