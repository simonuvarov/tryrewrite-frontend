describe('Sign in/up form unauthenticated tests', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/profile', { statusCode: 401 })
  })
  it('should display sign in form', () => {
    cy.visit('http://localhost:3000/signin')
    cy.contains('Sign in')
  })

  it('should display sign up form', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign up')
  })

  it('should display sign in form when clicking sign in link', () => {
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign in').click()
    cy.contains('Sign in')
  })

  it('should display sign up form when clicking sign up link', () => {
    cy.visit('http://localhost:3000/signin')
    cy.contains('Sign up').click()
    cy.contains('Sign up')
  })

  it('should display error message when submitting empty signin form', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get('button[type="submit"]').click()
    cy.contains('Email is required')
    cy.contains('Password is required')
  })

  it('should display error message when submitting empty signup form', () => {
    cy.visit('http://localhost:3000/signup')
    // Click on the submit button
    cy.get('button[type="submit"]').click()
    cy.contains('Email is required')
    cy.contains('Password is required')
  })
})

export {}
