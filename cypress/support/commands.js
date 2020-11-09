Cypress.Commands.add("login", (url) => {
    
    cy.request({
      url: url,
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',  
        'accept-language': 'en-US,en;q=0.5',  
        'Upgrade-Insecure-Requests': '1'   
      },
      method: 'GET'
    })
  
  })

  Cypress.Commands.add('checkpayload', (resp) => {
    resp.body.forEach((body,index) =>
    {
      
      expect(resp.body[index]).to.have.property('id');
      expect(resp.body[index]).to.have.property('loadTestId');
      expect(resp.body[index]).to.have.property('loadTestName');
      expect(resp.body[index]).to.have.property('result');
      expect(resp.body[index]).to.have.property('environment');
      expect(resp.body[index]).to.have.property('status');
      
      
    })
  })
    
