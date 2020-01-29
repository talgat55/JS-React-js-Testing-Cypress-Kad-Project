describe('Service page', () => {
    it('Service page open ', () => {
        cy.visit('http://localhost:3000/services');
    });

    it('Service page  items loaded ', () => {
        cy.visit('http://localhost:3000/services');
        cy.get('.service-block .item-wrap');
    });


});