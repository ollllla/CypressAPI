describe("HTTP Requests", ()=>{
    // it("Get Call", ()=> {
    //     cy.request({
    //         method:'GET', 
    //         url: 'https://reqres.in/api/users/2',
    //     }).its('status').should('equal', 200);
    // }),
    it("Get Call", ()=> { 
        cy.request({ 
            method:'GET', 
            url: 'https://reqres.in/api/users/2', }) 
            .then(function(response){ 
                expect(response.status).to.equal(200); 
                cy.log(JSON.stringify(response.body)); 
                console.log(response.body); 
            }); 
        }),
        it("Get Call", ()=> { 
            cy.request({ 
                method:'GET', 
                url: 'https://reqres.in/api/users/2', }) 
                .then(function(response){ 
                    expect(response.status).to.equal(200); 
                    expect(response.body[0].email).to.equal('molly@gmail.com');
                    cy.log(JSON.stringify(response.body)); 
                    console.log(response.body); 
                }); 
            }),
    it("POST API testing Using Cypress API Plugin", () => {
        cy.request("POST", "https://reqres.in/api/users", {
            name: "morpheus",
            job: "leader",
        }).should((response) => {
            expect(response.status).to.eq(201);
        });
    }),

    it("PUT API testing Using Flip Plugin", () => {
        cy.request("PUT", "https://reqres.in/api/users/2", {
          name: "QAAutomationLabs",
          job: "QA Automation Engg",
        }).should((response) => {
          expect(response.status).to.eq(200);
        });
      }),
    
    it("DELETE API testing Using Cypress API Plugin", () => {
        cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
          expect(response.status).to.eq(204);
        });
      });

});