describe('Results', () => {
   beforeEach(() => {
      cy.ntlm([Cypress.env('dev')], Cypress.env('username'), Cypress.env('password'));
     
  }) 
   it('gets results for the home page', () => {   
    
      cy.request({
         method:'GET',
         url:'http://performance.dev.paylocity.com/LoadTests/api/results',
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': '_ga=GA1.2.1333942138.1597685257; optimizelyEndUserId=oeu1598406659852r0.8232592745782337; _fbp=fb.1.1598406660841.827915254; __volmet_last_visit=10%2f19%2f2020+10%3a05%3a21+PM; _hjid=a2290c23-8ed9-4c8c-a8a8-d9afe8d9435c; _uetvid=2c82c0d0168311ebb9eb5b5a27f3e4db; intercom-id-radn7w0h=fe24cf8e-e08e-482b-8724-b1a216992ef8',
            'Host': 'performance.dev.paylocity.com',
            'Referer': 'http://performance.dev.paylocity.com/LoadTests/Spa',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
            
   
         }
      })
        .then((resp) => {
           expect(resp.status).to.eq(200)
           expect(resp.headers).to.include({
            'cache-control': 'no-cache',
             expires: '-1',
            'content-type': 'application/json; charset=utf-8'
           
            })
           
            //cy.checkpayload(resp);
            //because there are so many results, only verifying first 5 records. 
            for(let i = 0;  i<5; i++)
            { 
              expect(resp.body[i]).to.have.property('id');
              expect(resp.body[i]).to.have.property('loadTestId');
              expect(resp.body[i]).to.have.property('loadTestName');
              expect(resp.body[i]).to.have.property('result');
              expect(resp.body[i]).to.have.property('environment');
              expect(resp.body[i]).to.have.property('status');
              expect(resp.body[i]).to.have.property('executionEnvironmentId');
              expect(resp.body[i]).to.have.property('slaResultScore');
              expect(resp.body[i]).to.have.property('status');
              expect(resp.body[i]).to.have.property('startTime');
              expect(resp.body[i]).to.have.property('endTime');
              expect(resp.body[i]).to.have.property('executionLogId');
              expect(resp.body[i]).to.have.property('hasResults');
              expect(resp.body[i]).to.have.property('warmupTime');
              expect(resp.body[i]).to.have.property('coolDownTime');
              expect(resp.body[i]).to.have.property('runDuration');
              expect(resp.body[i]).to.have.property('testIterations');
              expect(resp.body[i]).to.have.property('includesCDWU');
              expect(resp.body[i]).to.have.property('isBaseline');
              expect(resp.body[i]).to.have.property('purposeComment');
              expect(resp.body[i]).to.have.property('resultComment');
              expect(resp.body[i]).to.have.property('actualDuration');
              expect(resp.body[i]).to.have.property('loadTestFullName');
              expect(resp.body[i]).to.have.property('scaleFactor');
   
            }
       })
          
      
   
   
   })

   it('gets loadmetrics landingpageonly', () => {   
    
      cy.request({
         method:'GET',
         url:'http://performance.dev.paylocity.com/LoadTests/api/loadmetrics?landingPageOnly=true',
         headers: {
            'Accept': 'application/json, text/plain, */*',
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
              'content-type': 'application/json; charset=utf-8',
            
            })
           
          
         
           
       })
           
   
   })   


})