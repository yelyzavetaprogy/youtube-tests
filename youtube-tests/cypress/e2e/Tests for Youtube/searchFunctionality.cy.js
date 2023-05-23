describe('YouTube Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com');
  });

  it('should perform a search', () => {
    cy.contains('Принять все').click();
    cy.get('input#search').type('OpenAI');
    cy.get('button#search-icon-legacy').click();
    cy.url().should('include', '/results');
    cy.get('h3#video-title').first().should('contain.text', 'OpenAI');
  });

  it('should log in and log out', () => {
    // Log in
    cy.contains('Войти').click();
    cy.get('input[type="email"]').type('your_username');
    cy.get('button.VfPpkd-vQzf8d').click();
    cy.get('input[type="password"]').type('your_password');
    cy.get('button.VfPpkd-vQzf8d').click();
    cy.contains('Войти').should('not.exist');
    cy.contains('your_username').should('exist');

    // Log out
    cy.get('button#avatar-btn').click();
    cy.contains('Выйти').click();
    cy.contains('your_username').should('not.exist');
    cy.contains('Войти').should('exist');
  });

  it('should validate elements', () => {
    cy.get('button#avatar-btn').should('exist');
    cy.get('input#search').should('exist');
    cy.get('a#video-title').should('exist');
    cy.get('button#subscribe-button').should('exist');
  });
});
