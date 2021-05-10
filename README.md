

This repository is for UI and API test automation
for ntml 
https://www.npmjs.com/package/cypress-ntlm-auth

SET NODE_TLS_REJECT_UNAUTHORIZED=0
[3:01 PM] https://github.com/bjowes/cypress-ntlm-auth/issues/31
GitHub
401 error while accessign https URL · Issue #31 · bjowes/cypress-ntlm-auth
I have an intranet application hosted on IIS with NTLM windows authentication enabled. I am using Cypress to do test automation. And configured ntlm plugin to access the site. Everything works fine...
[3:02 PM] cy.ntlmSso(['*.paylocity.com'])
    cy.request({
      url: 'https://dev-loadtest-01.paylocity.com/stormbreaker/LoadTests/api/environments',
      method: 'GET'
    })

GitHubGitHub
401 error while accessign https URL · Issue #31 · bjowes/cypress-ntlm-auth
I have an intranet application hosted on IIS with NTLM windows authentication enabled. I am using Cypress to do test automation. And configured ntlm plugin to access the site. Everything works fine...
