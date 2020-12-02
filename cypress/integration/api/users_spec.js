describe('Users', () => {
   beforeEach(() => {
      cy.ntlm([Cypress.env('stormbreaker-local')], Cypress.env('username'), Cypress.env('password'));
  })  
 it('gets list of provisioned users', () => {   
    cy.request({
       method:'POST',
       url:'/api/user/ListEnvironmentUserLogins',
       headers: {
          'Accept': 'application/json, text/plain, */*',
          'Accept-Encoding': 'gzip,deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
       },
       body: {
         environment: 'Bronze',
         application: 'WebLink'
       }
    })
      .then((resp) => {
         expect(resp.status).to.eq(200)
          resp.body.forEach((body,index) =>
          {
            expect(resp.body[index]).to.have.property('userId');
            expect(resp.body[index]).to.have.property('employeeId');
            expect(resp.body[index]).to.have.property('userName');
            expect(resp.body[index]).to.have.property('application');
            expect(resp.body[index]).to.have.property('purpose');
            expect(resp.body[index]).to.have.property('companyId');
          })
      })
   })
   it('gets a random provisioned user', () => {   
      cy.request({
         method:'POST',
         url:'/api/user/ListRandomEnvironmentUserLogin',
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36'
         },
         body: {
           environment: 'Bronze',
           application: 'WebLink'
         }
      })
        .then((resp) => {
           expect(resp.status).to.eq(200)
            resp.body.forEach((body,index) =>
            {
              expect(resp.body[index]).to.have.property('userId');
              expect(resp.body[index]).to.have.property('employeeId');
              expect(resp.body[index]).to.have.property('userName');
              expect(resp.body[index]).to.have.property('application');
              expect(resp.body[index]).to.have.property('purpose');
              expect(resp.body[index]).to.have.property('companyId');
            })
        })
     })

 
 })