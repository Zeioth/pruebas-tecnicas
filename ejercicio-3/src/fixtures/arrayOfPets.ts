import { Pet } from '../interfaces/IPet.js'

/** Mock of the data Pets[] returned by petController.getPets()
 *
 * @example
 * ```
 * await petController.countPetsWithSameName(arrayOfPets)
 * ```
 * */
export const arrayOfPets1: Pet[] = [
  { id: 922337204776000, category: "goodboy", name: "portobello", photoUrls: [], tags: [], status: "sold" },
  { id: 922337204776001, category: "goodboy", name: "portobello", photoUrls: [], tags: [], status: "sold" },
  { id: 922337204776002, category: "goodboy", name: "portobello", photoUrls: [], tags: [], status: "sold" },
  { id: 922337204776003, category: "goodboy", name: "donatello", photoUrls: [], tags: [], status: "sold" },
]
