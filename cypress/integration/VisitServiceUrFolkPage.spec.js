describe('Service detail  yuridicheskie uslugi  page', () => {
    it('Service detail  yuridicheskie uslugi page open ', () => {
        cy.visit('http://localhost:3000/services/yuridicheskie-uslugi');
    });

    it('Service detail  yuridicheskie uslugi page loaded ', () => {
        cy.visit('http://localhost:3000/services/yuridicheskie-uslugi');
        cy.get('.description');
    });

    it('Service detail  yuridicheskie uslugi page check load dinamic content ', () => {
        cy.visit('http://localhost:3000/services/yuridicheskie-uslugi');
        cy.get('.part-section .item');
    });


});