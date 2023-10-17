/**
 * COMMENTS:
 * We would normally separate all these elements in different files,
 * but for the sake of making the life of our reviewer simplier,
 * let's keep things self contained on this file.
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

/**
 * Print a list of pets with the format {id: number, name: string}.
 *
 * @param Pet[] - a list of pets.
 * @returns Promise<void>
 *
 * @example
 * ```
 * printPets(pets);
 * ```
 */
async function printPets(pets: Pet[]): Promise<void> {
  pets.forEach((pet) => {
    console.log( `{${pet.id}, "${pet.name}" }`);
  });
}

// ENTRY POINT
// ===========================================================================
async function main() {
  const pets: Pet[] = await getPets(PetStatus.Sold); // We only want sold pets
  printPets(pets);
}
main();
