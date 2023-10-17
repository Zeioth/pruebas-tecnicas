/**
 * COMMENTS:
 * We would normally separate all these elements in different files,
 * but for the sake of making the life of our reviewer simpler,
 * let's keep things self-contained in this file.
 */

import fetch from "node-fetch";

// INTERFACES AND ENUMERATIONS
// ===========================================================================

/** Accepted values as pet status. */
enum PetStatus {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

/** Structure of a pet object. */
interface Pet {
  id: number;
  category: string;
  name: string;
  photoUrls: [];
  tags: [];
  status: string;
}

// CLASSES
// ===========================================================================

/**
 * Class to manage a list of pets.
 *
 * @constructor PetManager(Pet[])
 *
 * @example
 * ```
 * const petManager = new PetManager(Pet[])
 * ```
 */
class PetManager {
  private pets: Pet[];

  constructor(pets: Pet[]) {
    this.pets = pets;
  }

  /**
   * Count pets with the same name and return the result as an object.
   *
   * @returns A list of key pairs like formed by { name: count }
   *
   * @example
   * ```
   * const petManager = new PetManager(pets);
   * const nameCounts = petManager.countPetsWithSameName();
   * ```
   */
  countPetsWithSameName(): { [name: string]: number } {
    const nameCounts: { [name: string]: number } = {};
    this.pets.forEach((pet) => {
      const petName = pet.name;
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

// FUNCTIONS
// ===========================================================================

/**
 * GET and return a list of pets.
 *
 * @param PetStatus - a value of the PetStatus enum.
 * @returns a list of pets.
 *
 * @example
 * ```
 * getPets(PetStatus.Sold);
 * ```
 */
async function getPets(status: PetStatus): Promise<Pet[]> {
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

// ENTRY POINT
// ===========================================================================
async function main() {
  const pets: Pet[] = await getPets(PetStatus.Sold); // We only want sold pets

  // Use the PetManager class to count pets with the same name
  const petManager = new PetManager(pets);
  const nameCounts = petManager.countPetsWithSameName();
  console.log("Pet Name Counts:", nameCounts);
}
main();
