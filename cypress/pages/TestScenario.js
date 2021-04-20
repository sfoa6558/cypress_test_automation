
class TestScenario
{
   getTestPlanScenarioSearch()
   {
      return cy.get('input[data-automation-id="scenario-searchbox"]');
   }
   
   getTestPlanScenarioTable()
   {
      return cy.get('table[data-automation-id="scenario-table"]');
   }

   getTestScenarioTableSecondColumn()
   {
      
     return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(2)');
   }
   
   getTestScenarioTableLoadFactor()
   {
      
     return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(3)');
   }
   
   getTestScenarioSaveButton()
   {
      return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > a.citrus-grid-action-primary.ng-scope');
   }
  
   getTestScenarioCancelButton()
   {
      return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > a:nth-child(3)');
   }

   getTestScenarioTableVirtualUser()
   {
      
     return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(4)');
   }

   getTestScenarioLoadFactor()
   {
      return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(3) > div > textarea')
   }

   getTestScenarioVirtualUserTotal()
   {
      return cy.get('table[data-automation-id="scenario-table"] > tbody > tr:nth-child(1) > td:nth-child(4) > div > textarea')
   }

   getSearchResult()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)');
   }

   getNoRecords()
   {
      return cy.get('table:nth-child(1) span');
   }

   getTestPlanScenarioTab()
   {
      return cy.get('a[data-automation-id="tm-testPlanScenarios-tab"]');
   }

   searchTestScenario(env)
   {
      const testscenario = new TestScenario();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      
      
      testscenario.getTestScenarioTableSecondColumn().each(($e, index) => {
        let text = $e.text().trim();
        testscenario.getTestPlanScenarioSearch().type(text);
        testscenario.getSearchResult().should('contain',text);
        return false;
       })
       

     
      
      testscenario.getTestPlanScenarioSearch().clear();
      
      testscenario.getTestPlanScenarioSearch().type("Search");

      testscenario.getNoRecords().should('contain',"No Records Found")

      testscenario.getTestPlanScenarioSearch().clear();
   }


  
   editScenario(env)
   {
      
      const testscenario = new TestScenario();
      const editedVal = "0";
      const regVal = "1";
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      cy.get(`table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > a:nth-child(1)`).click({force:true});
      
      testscenario.getTestScenarioLoadFactor().clear();
      testscenario.getTestScenarioVirtualUserTotal().clear(); 
      
      testscenario.getTestScenarioLoadFactor().type(editedVal);
      testscenario.getTestScenarioVirtualUserTotal().type(editedVal);
      testscenario.getTestScenarioSaveButton().click();
      
      testscenario.getTestScenarioTableLoadFactor().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(editedVal);
         return false;
        })
        


      testscenario.getTestScenarioTableVirtualUser().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(editedVal);
         return false;
        })

      cy.get(`table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > a:nth-child(1)`).click({force:true});
      testscenario.getTestScenarioLoadFactor().clear();
      testscenario.getTestScenarioVirtualUserTotal().clear();  
      testscenario.getTestScenarioLoadFactor().type(regVal);
      testscenario.getTestScenarioVirtualUserTotal().type(regVal);
      testscenario.getTestScenarioSaveButton().click();

      testscenario.getTestScenarioTableLoadFactor().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(regVal);
         return false;
        })
        


      testscenario.getTestScenarioTableVirtualUser().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(regVal);
         return false;
        })


   }
   
   cancelScenario(env)
   {
      const testscenario = new TestScenario();
      const editVal = '5';
      const regVal = '1';
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      cy.get(`table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > a:nth-child(1)`).click({force:true});
      testscenario.getTestScenarioLoadFactor().clear();
      testscenario.getTestScenarioVirtualUserTotal().clear();  
      testscenario.getTestScenarioLoadFactor().type(editVal);
      testscenario.getTestScenarioVirtualUserTotal().type(editVal);
      testscenario.getTestScenarioCancelButton().click();

      testscenario.getTestScenarioTableLoadFactor().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(regVal);
         return false;
        })
        


      testscenario.getTestScenarioTableVirtualUser().each(($e) => {
         let text = $e.text().trim();
         expect(text).to.equal(regVal);
         return false;
        })


      

   }

}

export default TestScenario