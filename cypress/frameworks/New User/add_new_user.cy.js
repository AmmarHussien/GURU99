///  <reference types="cypress" />

describe("Create New User Functionalty", () => {

    beforeEach(() => {
        cy.visit('/')

        cy.readFile('cypress/fixtures/login_data.json').then((login_data) => {
            cy.get('input[name=uid]').type(login_data.email)

            cy.get('input[name=password]').type(login_data.password)
        })

        cy.get('input[name=btnLogin]').click()

        cy.url().should('contain', 'manager/Managerhomepage.php')

        cy.get('.menusubnav > :nth-child(2) > a').click()

    })


    it("Add All Data", () => {
        cy.readFile('cypress/fixtures/user.json').then((user) => {
            cy.get('input[name=name]').type(user.name)

            cy.get('[value="f"]').click()

            cy.get('[value="m"]').click()

            cy.get('input[name=dob]').type('2023-01-04')

            cy.get('textarea').type('Hello World')

            cy.get(':nth-child(8) > :nth-child(2) > input').type('Cairo')

            cy.get(':nth-child(9) > :nth-child(2) > input').type('Helwan')

            cy.get(':nth-child(10) > :nth-child(2) > input').type('123456')

            cy.get(':nth-child(11) > :nth-child(2) > input').type('01146082989')

            cy.get(':nth-child(12) > :nth-child(2) > input').type('ammarrtrtrt@gail.com')

            cy.get(':nth-child(13) > :nth-child(2) > input').type('Ihf04011997')

            cy.get('[type="submit"]').click()

        })
    })
})