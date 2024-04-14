import { google } from '../support/helpers/google';
import { wikipedia } from '../support/helpers/wikipedia';

/** 2. You must create an automation consistent in:
 *      - Search the word `automatización` in Google.
 *      - Search the resulting link of wikipedia.
 *      - Check the year in which the first automated process was created.
 *      - Take a screenshot of the wikipedia page. */
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
