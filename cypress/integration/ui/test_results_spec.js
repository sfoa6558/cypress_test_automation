
import TestResult from '../../pages/TestResult';

describe('Test Result', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  beforeEach(() => {
      cy.ntlm([Cypress.env('stormbreaker-dev')], Cypress.env('username'), Cypress.env('password'));
      cy.visit("/");
      
  }) 
  
  it('checks results come back', () => {
    new TestResult().getTestManagement().click();
   })
    })