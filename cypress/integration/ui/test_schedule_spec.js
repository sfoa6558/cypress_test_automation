import TestPlan from '../../pages/TestPlan';
import TestResult from '../../pages/TestResult';
import TestSchedule from '../../pages/TestSchedule';

describe('Test Schedule', () => {
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
      new TestSchedule().getTestScheduleTab().click();
      
  }) 
  
  it('searches test schedule with a term that should give no results', () => {
    
     new TestSchedule().searchTestScheduleNegative();
   })

   it('creates a test schedule', () => {
    
    const testschedule = new TestSchedule();

    new TestPlan().getTestPlanTab().click();
    cy.get(`table[data-automation-id="lt-tests-table"] > tbody > tr:nth-child(1) > td:nth-child(4) > div > div > a:nth-child(2)`).click({force:true});
    testschedule.getWarmUpCoolDown().click();
    testschedule.getComments().type("Comments");
    testschedule.getName().type("TestSchedule");
    testschedule.getMonday().click();
    testschedule.getTuesday().click();
    testschedule.getSpecificDates().type("2021/05/03");
    testschedule.getrunTime().type("12:00");
    testschedule.getflagEnabled().click();
    new TestPlan().getSubmitButton().click();

    testschedule.getTestSchedulesSearchBox().type("TestSchedule");

    testschedule.getScheduleName().should('contain', 'TestSchedule');
   
    testschedule.getScheduleEnv().should('contain', 'Tin');

    testschedule.getDateCount().should('contain', '1');

    testschedule.getScheduleTime().should('contain', '12:00');

    testschedule.getDelete().click();

    testschedule.getEdit().click();

    testschedule.getMonday().should('be.checked');

    testschedule.getTuesday().should('be.checked');
    
    testschedule.getSpecificDates().should('contain', '2021/05/03');

    testschedule.getScheduleTime().should('contain', '12:00');

    testschedule.getflagEnabled().should('be.checked');






  })

 
    })