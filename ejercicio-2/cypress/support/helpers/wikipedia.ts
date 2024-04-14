/** Helpers to manipulate Wikipedia. */
class Wikipedia {
  private readonly yearRegex: RegExp = /\d{4}/; // 4 digits

  extractDateFromTextContaining(term: string): void {
    // act
    cy.contains(term).invoke('text').then((text) => {
      const yearMatch = text.match(this.yearRegex);

      if (yearMatch) {
        const year = yearMatch[0];
        cy.log(`Year of the first automatic process: ${year}`);
      } else {
        cy.log('No year found in the text block.');
      }
    });
  }

  takeScreenshot(): void {
    // act
    cy.screenshot('wikipedia-page', { overwrite: true });
  }
}

/** Helpers singleton */
export const wikipedia = new Wikipedia();

