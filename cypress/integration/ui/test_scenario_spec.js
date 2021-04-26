import TestScenario from '../../pages/TestScenario';
import TestResult   from '../../pages/TestResult'
describe('Test Scenario', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  beforeEach(() => {
      cy.ntlm([Cypress.env('stormbreaker-dev')], Cypress.env('username'), Cypress.env('password'));
      cy.visit("/");
      new TestResult().getTestManagement().click();
      cy.get('div.app-wrapper.ng-scope > div > h2').should('contain', 'Test Management');
      new TestScenario().getTestPlanScenarioTab().click();
      
  }) 
  
  it('searches test scenarios in all envs', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestScenario().searchTestScenario);
   })
  

  it('edits the load factor and virtual user total', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestScenario().editScenario);

    })

  
  it('cancels the load factor and virtual user total values', () => {
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestScenario().cancelScenario);
  
      })  
  })