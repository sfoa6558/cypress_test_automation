import 'cypress-file-upload';

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

  Cypress.Commands.add("iterateOperationAllEnvs", (envs,method) => {
    for(let i=0; i<envs.length; i++)
    {
      method(envs[i]);
    }
  })

  Cypress.Commands.add('downloadDocx', (url, directory) => {
    return cy.getCookies().then(cookies => {
        return cy.task('downloadDocx', {url: url, directory: directory, cookies: cookies });
    });
});

  Cypress.Commands.add('isExistDocx', () => {
    cy.task('isExistDocx');
});

    
