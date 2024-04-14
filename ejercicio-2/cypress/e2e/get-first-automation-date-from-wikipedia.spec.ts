import { google } from '../support/helpers/google';
import { wikipedia } from '../support/helpers/wikipedia';

describe('Exercise 2', () => {
  beforeEach(() => {
    google.openAndRejectCookies()
  });

  it('Searches "automatización" on Google and retrieves the date of the first automated process.', () => {
    google.searchTerm('automatización')
    google.navigateToWikipedia()

    wikipedia.extractDateFromTextContaining('el primer proceso industrial')
    wikipedia.takeScreenshot()
  });

  afterEach(() => {
    cy.log('Note that pending requests are safe to ignore. They are related with Google\'s autocompletion feature.');
  });
});
