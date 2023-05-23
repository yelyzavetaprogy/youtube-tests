describe('Login/Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com/');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('paper-button#button').click();
    cy.get('#identifierId').type('your_username');
    cy.get('#identifierNext').click();
    cy.get('#password input[name="password"]').type('your_password');
    cy.get('#passwordNext').click();
    cy.get('#avatar-btn').should('be.visible');
  });

  it('should display an error message for invalid login credentials', () => {
    cy.get('paper-button#button').click();
    cy.get('#identifierId').type('invalid_username');
    cy.get('#identifierNext').click();
    cy.get('.o6cuMc').should('be.visible');
  });

  it('should log out successfully', () => {
    // Assuming the user is already logged in
    cy.get('#avatar-btn').click();
    cy.get('a#signout').click();
    cy.get('paper-button#button').should('be.visible');
  });
});
