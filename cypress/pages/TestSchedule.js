class TestSchedule
{
   getTestSchedulesSearchBox()
   {
      return cy.get('input[data-automation-id="tm-schedules-searchbox"]');
   }
   
   getTestScheduleTab()
   {
      return cy.get('a[data-automation-id="tm-schedules-tab"]');
   }
   

   getNoRecords()
   {
      return cy.get('table:nth-child(1) span');
   }
 
   getWarmUpCoolDown()
   {
       return cy.get('input[data-automation-id="lt-run-incWUCU"]')
   }
   
   getUserScale()
   {
       return cy.get('input[data-automation-id="lt-run-userScale"]')
   }

   getThinkTimeScale()
   {
       return cy.get('input[data-automation-id="lt-run-ttScale"]')
   }

   getComments()
   {
       return cy.get('textarea[data-automation-id="lt-run-comments"]')
   }

   getName()
   {
       return cy.get('input[data-automation-id="lt-run-name"]')
   }

   getMonday()
   {
       return cy.get('input[data-automation-id="lt-run-mon"]')
   }

   getTuesday()
   {
       return cy.get('input[data-automation-id="lt-run-tues"]')
   }

   getSpecificDates()
   {
       return cy.get('textarea[data-automation-id="lt-run-onSpecificDates"]')
   }

   getrunTime()
   {
       return cy.get('input[data-automation-id="lt-run-time"]')
   }

   getScheduleTable()
   {
      return cy.get('table[data-automation-id="tm-schedules-table"]');
   }
  
   getScheduleName()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(1) > div > div');
   }
  
   getScheduleEnv()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3) > div > div');
   }

   
   getScheduleTime()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(14) > div > div');
   }
   
   getDateCount()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(13) > div > div');
   }
   
   getDelete()
   {
        return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(16) > div > div > a:nth-child(2)');
   }

   getEdit()
   {
        return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(16) > div > div > a:nth-child(1)');
   }

   getflagEnabled()
   {
       return cy.get('input[data-automation-id="lt-run-isEnabled"]')
   }

   searchTestScheduleNegative()
   {
      const testschedule = new TestSchedule();
     
      
      testschedule.getTestSchedulesSearchBox().type("Search");
      
      testschedule.getNoRecords().should('contain',"No Records Found")

      testschedule.getTestSchedulesSearchBox().clear();
   }

  



}

export default TestSchedule