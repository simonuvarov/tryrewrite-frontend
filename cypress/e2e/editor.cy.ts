describe('Dashbaord tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard')

    // Mocking API calls

    // Profile to be authenticated
    cy.intercept('GET', '/api/profile', { fixture: 'profile.json' }).as(
      'profile'
    )

    // Papers to be displayed
    cy.intercept('GET', '/api/papers', { fixture: 'papers.json' }).as(
      'getAllPapers'
    )

    // Create a new paper
    cy.intercept('POST', '/api/papers', { fixture: 'paper.json' }).as(
      'createPaper'
    )

    // Get a paper
    cy.intercept('GET', '/api/papers/IELTS-1234', { fixture: 'paper.json' }).as(
      'getPaper'
    )

    // Check a paper
    cy.intercept('PUT', '/api/papers/IELTS-1234', {
      fixture: 'checked-paper.json'
    }).as('checkPaper')
  })

  it('should display dashboard page', () => {
    cy.contains('band', { matchCase: false })
  })

  it('should create a new paper', () => {
    cy.get('#new-paper-button').click()
    cy.location('pathname').should('eq', '/paper/IELTS-1234')
    cy.get('#back-button').click()
  })

  it('should go to paper page and back', () => {
    cy.contains('band', { matchCase: false }).click()
    cy.contains(
      'Some people believe that technology has made our lives more complicated. Others think that it has made our lives easier. Discuss both views and give your opinion.'
    )

    cy.get('#assistant-button').click()
    cy.contains('Task Achievement').click()
    cy.get('#assistant-button').click()

    cy.get('#back-button').click()
  })
})

export {}
