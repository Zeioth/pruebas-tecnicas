import { newUser1 } from './fixtures/newUser1'
import { userController } from './controllers/userController'

import { Pet, PetStatus, PetsWithSameName } from './interfaces/IPet'
import { petController, PetController } from './controllers/petController'
import { petView } from './views/petView'

/** Entry point of the program. */
async function main() {

  /** 3.1 Create a user through a HTTP request,
   *      and retrieve its data by calling the corresponding service. */
  console.log("OUTPUT OF ASSIGNMENT 3.1")
  console.log("=========================================")
  await userController.createUsers(newUser1)
  const retreivedUser = await userController.getUser("adlop")
  console.log(retreivedUser)

  /** 3.2 Through a HTTP request get the JSON retourned by the endpoint
   *      /pet/findByStatus and list through a function the name of the pets
   *      that have been sold.
   *       - The output format must formed by the tuble { id, name }.
   *       - You can use any data structure. */
  console.log("\nOUTPUT OF ASSIGNMENT 3.2")
  console.log("=========================================")
  const pets:Pet[]|null = await petController.getPets(PetStatus.Sold)
  if (pets) {
    petView.printPets(pets)
  } else {
    return
  }

  /** 3.3 Create a class which constructor requires of the former data structure
   *      and implement a method that can go through it and identify pets
   *      with the same name.
   *       - Output example: { "William": 11, "Floyd": 2 }
   *       - Any extra adition to the code will be evaluated. */
  console.log("\nOUTPUT OF ASSIGNMENT 3.3")
  console.log("=========================================")
  // Here we are forced to use a constructor, so it's cleaner to use 'get/set'.
  const pc: PetController = new PetController(pets)
  pc.setPetsProp = pets
  const pwsm: PetsWithSameName = await pc.countPetsWithSameName(pc.getPetsProp)
  console.log(pwsm)
}
main()
