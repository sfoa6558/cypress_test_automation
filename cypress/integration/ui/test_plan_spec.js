import TestPlan from '../../pages/TestPlan';
import TestResult from '../../pages/TestResult';



describe('Test Plan', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  before(() => {
      cy.ntlm([Cypress.env('stormbreaker-dev')], Cypress.env('username'), Cypress.env('password'));
      cy.visit("/");
      new TestResult().getTestManagement().click();
      cy.get('div.app-wrapper.ng-scope > div > h2').should('contain', 'Test Management');
      
  }) 
  
 
   it('adds test plans in all envs', () => {
      cy.iterateOperationAllEnvs(['Tin','Bronze'],new TestPlan().addTestPlan);
      //deleting all test plans as cleanup and technically also a test
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().deleteTestPlan);

   })
  
   

   it('edits test plans in all envs', () => {
      cy.iterateOperationAllEnvs(['Tin','Bronze'],new TestPlan().addTestPlan);
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().editTestPlan);
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().deleteTestPlan);
     
  })
  
  
  it('executes test plans in all envs', () => {
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().executeTestPlan);
  })

  it('searches test plans in all envs', () => {
      cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().searchTestPlan);
  })
 /*
  it('downloads a test plan', () =>  {
   
    new TestPlan().iterateOperationAllEnvs(['Tin','Bronze'], new TestPlan().downloadTestPlan);
    
  })

 */
  it('add a test plan without choosing a test file', () => {
     new TestPlan().getAddTestPlan().click();
     new TestPlan().getSubmitButton().click();
     new TestPlan().getTestPlanError().contains("A Test Plan must be provided!");
     new TestPlan().getCancelButton().click({force:true});
  })

  it('add a test plan without choosing a test type', () => {
    new TestPlan().getAddTestPlan().click();
    cy.get('[id=testPlanFileData]')
      .attachFile('CypressAutoTest.jmx');
    new TestPlan().getSubmitButton().click();
    new TestPlan().getTestPlanError().contains("A Test Plan Test Type must be provided!");
    new TestPlan().getCancelButton().click({force:true});
  })

  


})