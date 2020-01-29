describe('Home page', () =>{
   it('Home page open ', () => {
        cy.visit('http://localhost:3000/');
   });

    it('Home page work  Home slider ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.home-slider')
    });
     it('Home page work  Service block ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.service-block .item-wrap');
    });
     it('Home page work  Promo block ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.promo-block .item');
    });

     it('Home page work  Cert block ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.certs-block .item');
    });

     it('Home page work  News block ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.news-block .item');
    });

     it('Home page work  Reviews block ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.reviews-block .item');
    });

     it('Home page work Map initialize ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.map-block .map-full ymaps');
    });




});