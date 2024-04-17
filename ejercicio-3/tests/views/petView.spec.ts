import { petView } from '../../src/views/petView'
import { arrayOfPets1 } from '../../src/fixtures/arrayOfPets'

describe('petView', () => {
  it('should print a list of pets in the correct format', async () => {
    // arrange
    const originalLog = console.log
    console.log = jest.fn() // Mock console.log

    // act
    await petView.printPets(arrayOfPets1)

    // assert
    expect(console.log).toHaveBeenCalledTimes(arrayOfPets1.length);
    arrayOfPets1.forEach((pet, index) => {
      // Ensure the format of each log message is correct for every pet.
      expect(console.log).toHaveBeenNthCalledWith(index + 1, expect.stringMatching(`{${pet.id}, "${pet.name}"\\s*}`));
    });
    console.log = originalLog
  })
})

