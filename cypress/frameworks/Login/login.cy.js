///  <reference types="cypress" />

describe("login functionalty test cases", () => {

    beforeEach('go to website', ()=> {
        cy.visit('/')
    })
    it("Login successfully", () => {
        

        cy.readFile('cypress/fixtures/login_data.json').then((login) => {
            cy.get('input[name=uid]').type(login.email)

            cy.get('input[name=password]').type(login.password)
        })

        cy.get('input[name=btnLogin]').click()

        cy.url().should('contain', 'manager/Managerhomepage.php')
    })

    it("Login without username", () => {
        //cy.visit('/')

        cy.readFile('cypress/fixtures/login_data.json').then((login) => {
            cy.get('input[name=password]').type(login.password)

        })
        cy.get('input[name=btnLogin]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User or Password is not valid');
        });
        cy.url().should('contain', 'index.php')
    })

    it("Login without password", () => {
        //cy.visit('/')

        cy.readFile('cypress/fixtures/login_data.json').then((user) => {
            cy.get('input[name=uid]').type(user.email)

        })
        cy.get('input[name=btnLogin]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User or Password is not valid');
        });
        cy.url().should('contain', 'index.php')
    })

    it("Login without anything", () => {
        //cy.visit('/')

        cy.get('input[name=btnLogin]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User or Password is not valid');
        });
        cy.url().should('contain', 'index.php')
    })

    it("reset button", () => {
        //cy.visit('/')

        cy.readFile('cypress/fixtures/login_data.json').then((user) => {
            cy.get('input[name=uid]').type(user.email)

            cy.get('input[name=password]').type(user.password)
        })

        cy.get('input[name=btnReset]').click()

        cy.get('input[name=uid]').should("have.text", "")
        
        cy.get('input[name=password]').should("have.text", "")
    })
})