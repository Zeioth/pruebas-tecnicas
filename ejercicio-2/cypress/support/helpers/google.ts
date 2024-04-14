
/** Helpers to manipulate Google Search. */
class Google {
  private readonly googleUrl: string = 'https://www.google.es';
  private readonly rejectCookiesButtonSelector: string = '#W0wltc > .QS5gu';
  private readonly searchInputSelector: string = '#APjFqb';
  private readonly searchFormSelector: string = 'form';
  private readonly searchResultsSelector: string = '#search';
  private readonly wikipediaLinkSelector: string = 'a[href*="wikipedia.org"]';

  openAndRejectCookies(): void {
    // act
    cy.visit(this.googleUrl);
    cy.get(this.rejectCookiesButtonSelector).should('contain', 'Rechazar').click();
  }

  searchTerm(searchTerm: string): void {
    // arrange
    cy.get(this.searchInputSelector).type(searchTerm);

    // act
    cy.get(this.searchFormSelector).submit();

    // assert
    cy.get(this.searchResultsSelector).should('be.visible');
  }

  navigateToWikipedia(): void {
    // act
    cy.get(this.wikipediaLinkSelector).first().click();

    // assert
    cy.url().should('include', 'wikipedia.org');
  }
}

/** Helpers singleton */
export const google = new Google();

