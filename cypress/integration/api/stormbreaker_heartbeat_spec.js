describe('Stormbreaker Heartbeat', () => {
   beforeEach(() => {
      cy.ntlm([Cypress.env('stormbreaker-local')], Cypress.env('username'), Cypress.env('password'));
  })  
 it('checks the heartbeat', () => {   
    cy.request({
       method:'GET',
       url:'/api/heartbeat',
       headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip,deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
         
 
       }
    })
      .then((resp) => {
         expect(resp.status).to.eq(200);
      })
   })
 

 
 })