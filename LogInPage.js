class LogInPage {
    
    emailField = '[data-test=email-field]';
    passwordField = '[data-test=password-field]';
    loginButton = '[data-test=login-button]';
    email = 'testemail@gmail.com';
    password = 'GoodPassword!';
    
    visitLogin() {
        cy.visit('https://secure.everlywell.com/login');
    }

    putCredentials() {
        cy.get(this.emailField).type(this.email);
        cy.get(this.passwordField).type(this.password);
        cy.get(this.loginButton).click();
    }
}