describe('Team page', () => {
    it('Team page open ', () => {
        cy.visit('http://localhost:3000/team');
    });

    it('Team page  items loaded ', () => {
        cy.visit('http://localhost:3000/team');
        cy.get('.team-wrap-row .item-team');
    });


});