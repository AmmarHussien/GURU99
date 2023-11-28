///  <reference types="cypress" />

describe("Edit User Functionalty", () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit('/')

        cy.readFile('cypress/fixtures/login_data.json').then((login_data) => {
            cy.get('input[name=uid]').type(login_data.email)

            cy.get('input[name=password]').type(login_data.password)
        })

        cy.get('input[name=btnLogin]').click()

        cy.url().should('contain', 'manager/Managerhomepage.php')

        cy.get('.menusubnav > :nth-child(3) > a').click()

        cy.url().should('contain', 'manager/EditCustomer.php')

    })

    it('Edit',()=>{
        cy.get(':nth-child(6) > :nth-child(2) > input').type('83102')

        cy.get('[type="submit"]').click()

        cy.get('textarea').type(' A7aaa')

        cy.get('[type="submit"]').click()
    })
})