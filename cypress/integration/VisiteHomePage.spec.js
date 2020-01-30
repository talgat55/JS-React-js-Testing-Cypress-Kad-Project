describe('Home page', () =>{
   it('Home page open ', () => {
        cy.visit('http://localhost:3000/');
   });

    it('Home page  open modal by click on button in header ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('header .feedback-link').click();
        cy.get('.custom-modal-wrapper.active ');
    });


    it('Home page  check for modal send form', () => {
        cy.visit('http://localhost:3000/');
        cy.get('header .feedback-link').click();

        cy.get('.custom-modal-wrapper.active  input[name=username]').type('test name');
        cy.get('.custom-modal-wrapper.active   input[name=userphone]').type('79034567459');
        cy.get('.custom-modal-wrapper.active   .btn-secondary').click();
        cy.get('.custom-modal-wrapper.success.active');
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
    it('Home page  open modal by click on button in block ur folks ', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.info-block .link-alt').click();
        cy.get('.custom-modal-wrapper.active ');
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