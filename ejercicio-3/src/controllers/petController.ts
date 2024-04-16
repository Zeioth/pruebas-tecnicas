// TODO: Please note we are using console.error() only as example. In production
//       we must use an actual logging library so we can monitor properly.

import axios from 'axios'
import { Pet, PetStatus, PetsWithSameName } from '../interfaces/IPet.js'

/**
 * Class to manage the 'pet' entpoint.
 *
 * @constructor PetController(Pet[])
 */
export class PetController {
  private pets: Pet[];

  /** This constructor initializes the state of the object through the member
   * 'pets'. */
  constructor(pets: Pet[]) {
    this.pets = pets;
  }

  /** Get accessor of the 'pets' property,
   * which contains the state returned by the getPets() method. */
  get getPetsProp(): Pet[] {
    return this.pets;
  }

  /** Set accessor of the 'pets' property,
   *  which stores the state returned by the getPets() method. */
  set setPetsProp(value: Pet[]) {
    this.pets = value;
  }

  /**
   * GET and return a list of pets.
   *
   * @param PetStatus - A value of the PetStatus enum.
   * @returns Pet[] if the request is successful.
   *          null if there is a error.
   *
   * @example
   * ```
   * getPets(PetStatus.Sold);
   * ```
   */
  async getPets(status: PetStatus): Promise<Pet[]|null> {
    const url = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`
    try {
      const response = await axios.get(url)
      return response.data as Pet[]
    } catch (error) {
      console.error('Error:', error)
      return null
    }
  }

  /**
   * Count pets with the same name and return the result as an object.
   *
   * Please note this function will return the names in lowercase.
   * This is necessary so we can count them reliably.
   *
   * Also note that javascript automatically takes care of converting
   * all indexes to string, so it's safe to use the pet names we get as index.
   *
   * @returns PetsWithSameName.
   *
   * @example
   * ```
   * const nameCounts = petController.countPetsWithSameName();
   * ```
   */
  async countPetsWithSameName(pets: Pet[]): Promise<PetsWithSameName> {
    const nameCounts: PetsWithSameName = {};
    pets.forEach((pet) => {
      const petName = pet.name.toLowerCase();
      if (nameCounts[petName]) {
        // For each pet, if its name exists in nameCounts, increase its counter.
        nameCounts[petName]++;
      } else {
        // Otherwise, create a counter for the new pet name.
        nameCounts[petName] = 1;
      }
    });
    return nameCounts;
  }
}

/** Singleton of the class PetController.*/
export const petController = new PetController([])
