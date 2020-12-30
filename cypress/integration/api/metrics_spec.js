describe('Metrics', () => {
   beforeEach(() => {
      cy.ntlm([Cypress.env('stormbreaker-dev')], Cypress.env('username'), Cypress.env('password'));
     
  })    
 it('gets load metric', () => {   
   
    cy.request({
       method:'GET',
       url:'/LoadTests/api/loadmetrics',
       headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip,deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
          'Cookie': '_ga=GA1.2.1333942138.1597685257; optimizelyEndUserId=oeu1598406659852r0.8232592745782337; _fbp=fb.1.1598406660841.827915254; __volmet_last_visit=10%2f19%2f2020+10%3a05%3a21+PM; _hjid=a2290c23-8ed9-4c8c-a8a8-d9afe8d9435c; _uetvid=2c82c0d0168311ebb9eb5b5a27f3e4db; intercom-id-radn7w0h=fe24cf8e-e08e-482b-8724-b1a216992ef8',
          'Host': 'dev-loadtest-01.paylocity.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
         
 
       }
    })
      .then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.headers).to.include({
            'connection': 'keep-alive',
            'content-type': 'text/html; charset=utf-8',
            'persistent-auth': 'true',
            'server': 'Kestrel',
            'transfer-encoding': 'chunked',
            'x-powered-by': 'ASP.NET'
           
          })
         
          expect(resp.body).to.include(
            '<title>Stormbreaker - Load Testing Results</title>'

          
          
         )
        
         
      })
   })
 

 
 })