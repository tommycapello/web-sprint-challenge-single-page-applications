describe( 'Form Test', () => {

    beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')});

    // sanity test
    it('Testing true is true', function() {
      expect(true).to.equal(true);
    });

    const inputName = () => cy.get('input[name="name"]');
    const inputInstructions = () => cy.get('input[name="instructions"]');
    const pepChx = () => cy.get('input[name="pepperoni"]');
    const oliveChx = () => cy.get('input[name="olives"]');
    const onionsChx = () => cy.get('input[name="onions"]');
    const peppersChx = () => cy.get('input[name="peppers"]');
    const dropDown = () => cy.get('select');
    const submitButton = () => cy.get('button');


    it('Testing the inputs', () => {

        inputName()
        .should("have.value", "")
        .type("Tommy Capello")
        .should("have.value","Tommy Capello")

        inputInstructions()
        .should("have.value", "")
        .type("Random Instructions!!!!")
        .should("have.value","Random Instructions!!!!")

    })

    it('Checking multiple checkboxes', () => {
        pepChx()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        oliveChx()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        onionsChx()
        .should('not.be.checked')
        .check()
        .should('be.checked')

        peppersChx()
        .should('not.be.checked')
        .check()
        .should('be.checked')
    });

    it('Testing the form validation', () => {

        inputName()
        .type("Tommy Capello");

        dropDown()
        .select('large')


        submitButton()
        .should('not.have.attr', 'disabled');

    });
});