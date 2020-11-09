describe('Environments', () => {
    
 it('gets load test environments', () => {   
    cy.request({
       method:'GET',
       url:'/LoadTests/api/environments',
       headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip,deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
          'Cookie': '_ga=GA1.2.1333942138.1597685257; optimizelyEndUserId=oeu1598406659852r0.8232592745782337; _fbp=fb.1.1598406660841.827915254; __volmet_last_visit=10%2f19%2f2020+10%3a05%3a21+PM; _hjid=a2290c23-8ed9-4c8c-a8a8-d9afe8d9435c; _uetvid=2c82c0d0168311ebb9eb5b5a27f3e4db; intercom-id-radn7w0h=fe24cf8e-e08e-482b-8724-b1a216992ef8',
          'Host': 'performance.dev.paylocity.com',
          'Referer': 'http://performance.dev.paylocity.com/LoadTests/Spa',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
          'Authorization': `basic ${btoa(`${Cypress.env('username')}:${Cypress.env('password')}`)}`
 
       }
    })
      .then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.headers).to.include({
            'cache-control': 'no-cache',
            expires: '-1',
            'content-type': 'application/json; charset=utf-8'
          
          })
       resp.body.forEach((body,index) =>
       {
         
         expect(resp.body[index]).to.have.property('environmentId');
         expect(resp.body[index]).to.have.property('type');
         expect(resp.body[index]).to.have.property('name');
         expect(resp.body[index]).to.have.property('gitRepoType');
         expect(resp.body[index]).to.have.property('protocol');
         expect(resp.body[index]).to.have.property('host');
        
         
       })
        
      })
    
   })
 
 
 })