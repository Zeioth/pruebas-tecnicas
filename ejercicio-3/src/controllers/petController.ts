// TODO: Please note we are using console.log() only as example. In production
//       we must use an actual logging library so we can monitor properly.

import fetch from 'node-fetch'
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
   * @returns An array of objects with the interface Pet.
   *
   * @example
   * ```
   * getPets(PetStatus.Sold);
   * ```
   */
  async getPets(status: PetStatus): Promise<Pet[]> {
    try {
      const getUserUrl = `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`;
      const response = await fetch(getUserUrl);

      if (response.ok) {
        const data: Pet[] = (await response.json()) as Pet[];
        return data;
      } else {
        console.error(
          "GET PETS Request Failed with Status Code:",
          response.status,
        );
        throw new Error("GET PETS Request Failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }

  /**
   * Count pets with the same name and return the result as an object.
   *
   * @returns A object with the interface PetsWithSameName.
   *
   * @example
   * ```
   * const nameCounts = petController.countPetsWithSameName();
   * ```
   */
  async countPetsWithSameName(pets: Pet[]): Promise<PetsWithSameName> {
    const nameCounts: PetsWithSameName = {};
    pets.forEach((pet) => {
      const petName = "'" + pet.name.toLowerCase() + "'";
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
