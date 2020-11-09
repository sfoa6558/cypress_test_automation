describe('Admin Access rights', () => {
  beforeEach(() => {
      cy.ntlm([Cypress.env('dev')], Cypress.env('username'), Cypress.env('password'));
      cy.visit("/");
      cy.get("[data-automation-id='home-admin']").click()
  }) 
  
   it('searches for and finds a valid user', () => { 
     
      cy.get("input[data-automation-id=ar-users-searchbox]").type("fakinyemi");
      cy.get("[data-automation-id='ar-users-table']").contains('td'," fakinyemi");
    })
    
    it('searches for and does not find an invalid user', () => { 
    
      cy.get("input[data-automation-id=ar-users-searchbox]").type("test user");
      cy.get("[data-automation-id='ar-users-table']").contains('td',"test user").should('not.exist')
    })
    
    it('searches for and finds a valid group', () => { 
     
      cy.get("input[data-automation-id=ar-userGroups-searchbox]").type("Team Canary");
      cy.get("[data-automation-id='ar-userGroups-table']").contains('td'," Team Canary");
    })
    
    it('searches for and does not find an invalid user', () => { 
    
      cy.get("input[data-automation-id=ar-users-searchbox]").type("test team");
      cy.get("[data-automation-id='ar-users-table']").contains('td',"test team").should('not.exist')
    })
    /*
    it('adds a regular user', () => { 
      cy.get("[data-automation-id='ar-add-group']").click();
      cy.get("input[ng-model='vm.activeUser.name']").type("JWisdom");
      cy.get("[data-automation-id='add-edit-adUser-table']")
       .find('tbody > tr').first().find('td')
        .each(($el) => {
          cy.wrap($el)
           .click()
        })
        cy.get('.button').contains('Save').click();
        cy.get("[data-automation-id='ar-users-table']").find('tbody > tr').find('td').contains("Read, Edit, Add, Delete");
        cy.get("body > citrus-loader > div").should('not.exist')
        cy.get('a').contains("Delete").invoke('attr', 'style', 'display: inline').click()
        cy.get("input[data-automation-id=ar-users-searchbox]").type("JWisdom");
        cy.get("[data-automation-id='ar-users-table']").contains('td',"JWisdom").should('not.exist')
    })
     */
    })