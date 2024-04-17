import { Pet } from '../interfaces/IPet'


/** Class to print 'pet' data on console. */
export class PetView {
  /**
   * Print a list of pets with the format {id: number, name: string}.
   *
   * @param Pet[] - An array of pets.
   * @returns Promise<void>
   *
   * @example
   * ```
   * petView.printPets(pets)
   * ```
   */
  async printPets(pets: Pet[]): Promise<void> {
    pets.forEach((pet) => {
      console.log(`{${pet.id}, "${pet.name}" }`)
    })
  }
}

/** Singleton of the class PetView.*/
export const petView = new PetView()
