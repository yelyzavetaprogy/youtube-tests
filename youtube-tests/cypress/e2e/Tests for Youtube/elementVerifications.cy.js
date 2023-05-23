describe('YouTube Tests', () => {
  beforeEach(() => {
    // Visit the YouTube homepage before each test
    cy.visit('https://www.youtube.com');
    // Accept cookies (assuming the "Agree" button is in Russian)
    cy.contains('Согласиться').click();
  });

  it('should perform a search', () => {
    // Type a search query in the search input field
    cy.get('input[id="search"]').type('cats');
    // Press the Enter key to perform the search
    cy.get('input[id="search"]').type('{enter}');
    // Validate that search results are displayed
    cy.get('#video-title').should('exist');
  });

  it('should login and logout', () => {
    // Click the "Sign In" button
    cy.contains('Войти').click();
    // Perform the login process (enter username and password)
    cy.get('input[type="email"]').type('your_email@example.com');
    cy.get('input[type="password"]').type('your_password');
    cy.contains('Войти').click();
    // Validate that the user is logged in
    cy.contains('Выйти').should('exist');
    // Click the "Logout" button
    cy.contains('Выйти').click();
    // Validate that the user is logged out
    cy.contains('Войти').should('exist');
  });

  it('should validate elements on the homepage', () => {
    // Validate the presence of important elements on the homepage
    cy.get('#logo').should('be.visible');
    cy.contains('Trending').should('be.visible');
    cy.contains('Music').should('be.visible');
    cy.contains('Gaming').should('be.visible');
  });
});
