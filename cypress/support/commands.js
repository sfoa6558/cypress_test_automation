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

  
    
