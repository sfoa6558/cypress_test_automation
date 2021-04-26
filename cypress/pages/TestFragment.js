class TestFragment
{
   
   
   
   getAddTestFragment()
   {
      return cy.get('button[data-automation-id="add-TestFragment"]');
   }

   getTestFragmentName()
   {
      return cy.get('input[data-automation-id="wt-edit-newName"]');
   }


   getAddDomain()
   {
      return cy.get('select[data-automation-id="wt-add-domain"]');
   }

   getEditDomain()
   {
      return cy.get('select[data-automation-id="wt-edit-newTeam"]');
   }
   
   getAddSecurityGroup()
   {
      return cy.get('input[data-automation-id="wt-add-subfolder"]');
   }

   getEditSecurityGroup()
   {
      return cy.get('input[data-automation-id="wt-edit-subFolder"]');
   }

   getSubmitButton()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open > div > div > div > div.modal-footer > button:nth-child(1)')
   }
   


   getCancelButton()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open div.modal-footer > button:nth-child(2)')
   }
   
   getTestFragmentTable()
   {
      return cy.get('table[data-automation-id="testFragments-table"]');
   }

   getTestFragmentTableFirstColumn()
   {
      return cy.get('table[data-automation-id="testFragments-table"] > tbody > tr td:nth-child(1)');
   }

   getTestFragmentTableSecondColumn()
   {
      return cy.get('table[data-automation-id="testFragments-table"] > tbody > tr td:nth-child(2)');
   }

   getTestFragmentTableThirdColumn()
   {
      return cy.get('table[data-automation-id="testFragments-table"] > tbody > tr td:nth-child(3)');
   }
   
   getTestFragmentSearchBox()
   {
      return cy.get('input[data-automation-id="testFragments-searchbox"]');
   }

    
   getTestFragmentError()
   {
      return cy.get('citrus-modal.ng-scope.ng-isolate-scope.modal-open > div > div > div > citrus-banner > div > p > span');
   }
 
   getNoRecords()
   {
      return cy.get('table:nth-child(1) span');
   }

   getTestFragmentTab()
   {
      return cy.get('a[data-automation-id="tm-testFragments-tab"]');
   }
  
   deleteTestFragment(env)
   {
      const testfragment = new TestFragment();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testfragment.getTestFragmentSearchBox().type('CypressAutoTestFragment');  
      testfragment.getTestFragmentTableThirdColumn().each(($e, index) => {
         const text = $e.text();
         if(text.trim() == "CypressAutoTestFragment")
         {
            
            cy.get(`table[data-automation-id="testFragments-table"] > tbody > tr td:nth-child(7) > div > div > a:nth-child(3)`).first().click();
            return false;
        }
        })
      
     
      testfragment.getSubmitButton().first().click();
      testfragment.getTestFragmentTable()
      .find('tr')
      .should('contain', 'CypressAutoTestFragment')
      .should('contain','Data Transfer')
      .should('contain','Group')
      .should('contain', 'false')
      
      testfragment.getTestFragmentSearchBox().clear();
   }

   addTestFragment(env)
   {
      const testfragment = new TestFragment();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testfragment.getAddTestFragment().click();
     
      cy.get('[id=testFragmentFileData]')
      .attachFile('CypressAutoTestFragment.jmx');
  
      testfragment.getAddDomain().select('Data Transfer');
      
      testfragment.getAddSecurityGroup().type('Group'); 
  
      testfragment.getSubmitButton().click();
    
      testfragment.getTestFragmentSearchBox().type('CypressAutoTestFragment');  

      testfragment.getTestFragmentTable()
      .find('tr')
      .should('contain', 'CypressAutoTestFragment')
      .should('contain','Data Transfer')
      .should('contain','Group')

      testfragment.getTestFragmentSearchBox().clear();

      
    
   }
 
   cancelTestFragment(env)
   {
      const testfragment = new TestFragment();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testfragment.clickEdit("CypressAutoTestFragment");
      testfragment.getTestFragmentName().clear();
      testfragment.getTestFragmentName().type('NameEdited');
      testfragment.getEditDomain().select('Expense');
      testfragment.getEditSecurityGroup().clear();
      testfragment.getEditSecurityGroup().type('FolderEdited'); 
      testfragment.getCancelButton().click();

      
      testfragment.getTestFragmentTable()
      .find('tr')
      .should('contain', 'CypressAutoTestFragment')
      .should('contain','Data Transfer')
      .should('contain','Group')
   }

   editTestFragment(env)
   {
      const testfragment = new TestFragment();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      testfragment.clickEdit("CypressAutoTestFragment");
      testfragment.getTestFragmentName().clear();
      testfragment.getTestFragmentName().type('NameEdited');
      testfragment.getEditDomain().select('Expense');
      testfragment.getEditSecurityGroup().clear();
      testfragment.getEditSecurityGroup().type('FolderEdited'); 
      testfragment.getSubmitButton().click({force:true});
      
      testfragment.getTestFragmentSearchBox().clear();
      testfragment.getTestFragmentSearchBox().type('NameEdited');
      
      testfragment.getTestFragmentTable()
      .find('tr')
      .should('contain', 'NameEdited')
      .should('contain','Expense')
      .should('contain','FolderEdited')

       
      testfragment.clickEdit("NameEdited");
      testfragment.getTestFragmentName().clear();
      testfragment.getTestFragmentName().type('CypressAutoTestFragment');
      testfragment.getEditDomain().select('Data Transfer');
      testfragment.getEditSecurityGroup().clear();
      testfragment.getEditSecurityGroup().type('Group');
      testfragment.getSubmitButton().click({force:true});

      testfragment.getTestFragmentSearchBox().clear();
      testfragment.getTestFragmentSearchBox().type('CypressAutoTestFragment');


      testfragment.getTestFragmentTable()
        .find('tr')
        .should('contain', 'CypressAutoTestFragment')
        .should('contain','Data Transfer')
        .should('contain','Group')

       testfragment.getTestFragmentSearchBox().clear();

   }
  
   searchTestFragmentNegative(env)
   {
      const testfragment = new TestFragment();
      cy.get(`a[data-automation-id="${env}-subtab"]`).click();
      
      testfragment.getTestFragmentSearchBox().type("Search");
      
      testfragment.getNoRecords().should('contain',"No Records Found")

      testfragment.getTestFragmentSearchBox().clear();
   }

   
   clickEdit(test)
   {
      const testfragment = new TestFragment();
      testfragment.getTestFragmentSearchBox().clear();
      testfragment.getTestFragmentSearchBox().type(test);
      testfragment.getTestFragmentTableThirdColumn().each(($e, index) => {
         let text = $e.text();
         if(text.trim().includes(test))
         {
            
            cy.get(`table[data-automation-id="testFragments-table"] > tbody > tr:nth-child(${index+1}) > td:nth-child(7) > div > div > a:nth-child(1)`).click({force:true});
         }
        })
   }


}

export default TestFragment