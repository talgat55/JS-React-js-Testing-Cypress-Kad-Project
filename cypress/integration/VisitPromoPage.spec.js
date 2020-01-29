describe('Promo page', () => {
    it('Promo page open ', () => {
        cy.visit('http://localhost:3000/promo');
    });

    it('Promo page  items loaded ', () => {
        cy.visit('http://localhost:3000/promo');
        cy.get('.promo-list  .item');
    });


});