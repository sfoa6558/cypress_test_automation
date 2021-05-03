import TestResult   from '../../pages/TestResult';
import TestFragment from '../../pages/TestFragment';
describe('Test Fragment', () => {
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
      new TestFragment().getTestFragmentTab().click();
      
      
  }) 
  /*
  it('adds test fragments in all envs', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestFragment().addTestFragment);
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestFragment().deleteTestFragment);
   })
  
  it('edits test fragments in all envs', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestFragment().editTestFragment);
   
   })

   it('cancels test fragments in all envs', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestFragment().cancelTestFragment);
   
   })
  */
   it('searches test fragments with a term that should give no results', () => {
    cy.iterateOperationAllEnvs(['Tin','Bronze'], new TestFragment().searchTestFragmentNegative);
   })
   /*
   it('adds a test fragment without a security group', () => {
    const testfragment = new TestFragment();
    testfragment.getAddTestFragment().click();
    cy.get('[id=testFragmentFileData]')
    .attachFile('CypressTestFragment.jmx');
    testfragment.getAddDomain().select('Data Transfer');
    testfragment.getSubmitButton().click();
    testfragment.getTestFragmentTable()
    .find('tr')
    .should('contain', 'CypressTestFragment')
    .should('contain','Data Transfer')
    .should('contain','')
   })

   it('adds a test fragment without choosing a test file', () => {
    const testfragment = new TestFragment();
    testfragment.getAddTestFragment().click();
    testfragment.getAddDomain().select('Data Transfer');
    testfragment.getAddSecurityGroup().type('Group'); 
    testfragment.getSubmitButton().click();
    testfragment.getTestFragmentError().contains("A Test Fragment must be provided!");
   })
  
  it('adds a test fragment without choosing a domain', () => {
    const testfragment = new TestFragment();
    testfragment.getAddTestFragment().click();
    cy.get('[id=testFragmentFileData]')
    .attachFile('CypressTestFragment.jmx');
    testfragment.getAddSecurityGroup().type('Group'); 
    testfragment.getSubmitButton().click();
    testfragment.getTestFragmentError().contains("A Test Fragment Domain must be provided!");
  })
  
  /*
  it('downloads a test fragment', () => {
    testfragment.getTestFragmentSearchBox().type("CypressAutoTestFragment");
    cy.get('a').then(element => {
      cy.downloadDocx((Cypress.config().baseUrl + element.attr('href').substr(0)), 'fixtures');
  });
  cy.isExistDocx();
  })
 */
  })