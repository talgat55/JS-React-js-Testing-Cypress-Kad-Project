describe('News page', () => {
    it('News page open ', () => {
        cy.visit('http://localhost:3000/blog');
    });

    it('News page  items loaded ', () => {
        cy.visit('http://localhost:3000/blog');
        cy.get('.news-list .item');
    });


});