describe('Exersice 1', () => {
  it('Search "automatization" on google and get the date of the first automated process.', () => {

    // STEP 1-> Rejects Cookies
    // ----------------------------

    // arrange
    cy.visit('https://www.google.com');

    // act (reject cookies)
    cy.get('#W0wltc > .QS5gu').should('contain', 'Rechazar').click();


    // STEP 2 -> Search for "automatization" on Google
    // -----------------------------------------------

    // arrange
    cy.get('#APjFqb').type('automatization');

    // act
    cy.get('form').submit();

    // assert
    cy.get('#search').should('be.visible');


    // STEP 3 -> Navigate to Wikipedia and extract Information
    // -------------------------------------------------------

    // act
    cy.get('a[href*="wikipedia.org"]').first().click();

    // assert
    cy.url().should('include', 'wikipedia.org');

    // assert (extract the date from its parent container)
    cy.contains('el primer proceso industrial').invoke('text').then((text) => {
      const yearRegex = /\d{4}/;  // 4 digits
      const yearMatch = text.match(yearRegex);

      if (yearMatch) {
        const year = yearMatch[0];
        cy.log(`Year of the first automatic process: ${year}`);
      } else {
        cy.log('No year found in the text block.');
      }
    });


    // STEP 4 -> Take a Screenshot of the Wikipedia page
    // -------------------------------------------------

    // Act
    cy.screenshot('wikipedia-page');


  });
});

