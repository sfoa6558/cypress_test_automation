class TestPlan
{
   
   
   
   getAddTestPlan()
   {
      return cy.get('button[data-automation-id="add-loadtest"]');
   }

   getSearchBox()
   {
      return cy.get('button[data-automation-id="lt-tests-searchbox"]');
   }

   getAddLoadTest()
   {
      return cy.get('select[data-automation-id="tp-add-subfolder"]');
   }

   getSubmitButton()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open button:nth-child(1)')
   }
   
   getCancelButton()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open div.modal-footer > button:nth-child(2)')
   }
   
 

   getTestPlanTableSecondColumn()
   {
      return cy.get('table[data-automation-id="lt-tests-table"] > tbody > tr td:nth-child(2)');
   }


   getLoadTestTable()
   {
      return cy.get('table[data-automation-id="lt-tests-table"]');
   }
  

   getTestPlanName()
   {
      return cy.get('input[data-automation-id="wt-edit-newName"]');
   }

   getTestType()
   {
      return cy.get('select[data-automation-id="wt-edit-newTestType"]');
   }

   getEnvTable()
   {
      return cy.get('table[data-automation-id="lt-run-upcoming-table"]');
   }

   getEnvExecuteText()
   {
      return cy.xpath('//span[@text()="Environment in which to Execute:"]');
   }

   getEnvText()
   {
      return cy.xpath('//span[@text()="Tin"]');
   }

   getStatistics()
   {
      return cy.get('input[data-automation-id="lt-run-incWUCU"]');
   }

   getComments()
   {
      return cy.get('textarea[data-automation-id="lt-run-comments"]');
   }

   getTitleModal()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open > div > div > div > div.modal-header > h2');
   }
   
   getSearchBox()
   {
      return cy.get('input[data-automation-id="lt-tests-searchbox"]');
   }

   getSearchResult()
   {
      return cy.get('table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)');
   }
   
   getNoRecords()
   {
      return cy.get('table:nth-child(1) span');
   }

   getTestPlanError()
   {
      return cy.get('.banner-message.ng-scope.error > p > span');
   }

  
   deleteTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testplan.getTestPlanTableSecondColumn().each(($e, index) => {
         const text = $e.text();
         if(text.trim() == "CypressAutoTest")
         {
            
         
            cy.get(`table[data-automation-id="lt-tests-table"] > tbody > tr:nth-child(${index+1}) > td:nth-child(4) > div > div > a:nth-child(5)`).click({force:true});
         }
        })
      
     
      testplan.getSubmitButton().click({force:true});
      testplan.getLoadTestTable()
      .find('tr')
      .should('contain', 'CypressAutoTest')
      .should('contain','false')
   }

   addTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testplan.getAddTestPlan().click();
      cy.get('[id=testPlanFileData]')
      .attachFile('CypressAutoTest.jmx');
  
      testplan.getAddLoadTest().select("Smoke Test");
      
      testplan.getSubmitButton().click(); 
  
      testplan.getLoadTestTable()
        .find('tr')
        .should('contain', 'CypressAutoTest')
        .should('contain','true')
        .should('contain','Smoke Test')
    
   }
 
   editTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testplan.clickEdit("CypressAutoTest");
      testplan.getTestPlanName().clear();
      testplan.getTestPlanName().type('CypressAutoTestEdited');
      testplan.getTestType().select('Regression Test');
      testplan.getSubmitButton().click({force:true});
      
      testplan.getLoadTestTable()
        .find('tr')
        .should('contain', 'CypressAutoTestEdited')
        .should('contain','true')
        .should('contain','Regression Test')

       
      testplan.clickEdit("CypressAutoTestEdited");
      testplan.getTestPlanName().clear();
      testplan.getTestPlanName().type('CypressAutoTest');
      testplan.getTestType().select('Smoke Test');
      testplan.getSubmitButton().click({force:true});

      testplan.getLoadTestTable()
        .find('tr')
        .should('contain', 'CypressAutoTestEdited')
        .should('contain','true')
        .should('contain','Regression Test')

    
   }
  

   downloadTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testplan.getTestPlanTableSecondColumn().each(($e, index) => {
         const text = $e.text();
         if(text.trim() == "CypressAutoTest")
         {
            
            cy.get(`table[data-automation-id="lt-tests-table"] > tbody > tr:nth-child(${index+1}) > td:nth-child(4) > div > div > a:nth-child(4)`).click({force:true});
         }
        })
      

      
     
   }


   executeTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testplan.getTestPlanTableSecondColumn().each(($e, index) => {
         const text = $e.text();
         if(text.trim() == "CypressAutoTest")
         {
            
            cy.get(`table[data-automation-id="lt-tests-table"] > tbody > tr:nth-child(${index+1}) > td:nth-child(4) > div > div > a:nth-child(1)`).click({force:true});
         }
        })
      

      
      testplan.getEnvTable().should('be.visible');
      testplan.getStatistics().should('be.visible');
      testplan.getComments().should('be.visible');
      testplan.getTitleModal().should('be.visible');
      testplan.getCancelButton().click({force:true});
   }

   searchTestPlan(env)
   {
      const testplan = new TestPlan();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      
      testplan.getSearchBox().type("CypressAutoTest");
      
      testplan.getSearchResult().should('contain',"CypressAutoTest");
      
      testplan.getSearchBox().clear();
      
      testplan.getSearchBox().type("Search");

      testplan.getNoRecords().should('contain',"No Records Found")

      testplan.getSearchBox().clear();
   }



   clickEdit(test)
   {
      const testplan = new TestPlan();
      testplan.getTestPlanTableSecondColumn().each(($e, index) => {
         let text = $e.text();
         if(text.trim().includes(test))
         {
            cy.get(`table[data-automation-id="lt-tests-table"] > tbody > tr:nth-child(${index+1}) > td:nth-child(4) > div > div > a:nth-child(3)`).click({force:true});
         }
        })
   }


}

export default TestPlan