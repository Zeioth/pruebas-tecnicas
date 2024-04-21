import { Pet, PetsWithSameName, PetStatus } from '@interfaces/IPet'
import { petController, PetController } from '@controllers/petController'
import { arrayOfPets1 } from '@fixtures/arrayOfPets'

describe('petController', () => {
  it(`should GET a list of pets by calling getPets()
      and expect a \`Pet[]\` interface.`, async () => {
    // arrange
    let pets: Pet[] | null = null

    // act
    pets = await petController.getPets(PetStatus.Sold)

    // assert
    expect(pets).not.toBeUndefined
    expect(pets).not.toBeNull
    expect(pets).toEqual(expect.arrayContaining<Pet>([
      expect.any(Object) // that matches the interface.
    ]))
  }),

  it(`should GET a list of pets by calling countPetsWithSameName()
      and expect a \`PetsWithSameName[]\` interface.`, async () => {
    // arrange
    const pets: Pet[] = arrayOfPets1
    let petsWithSameName: PetsWithSameName | null = null

    // act
    petsWithSameName = await petController.countPetsWithSameName(pets)

    // assert
    expect(petsWithSameName).not.toBeUndefined
    expect(petsWithSameName).not.toBeNull
    expect(pets).toEqual(expect.arrayContaining<PetsWithSameName>([
      expect.any(Object) // that matches the interface.
    ]))
  }),



  it(`should GET pets and count the ones with the same name
      using the a controller class (hard requirement).`, async () => {
    // arrange
    let pets: Pet[] | null = null
    let pc: PetController
    let pwsn: PetsWithSameName = {}

    // act
    pets = await petController.getPets(PetStatus.Sold)
    if (pets) {
      pc = new PetController(pets)
      pc.setPetsProp = pets
      pwsn = await pc.countPetsWithSameName(pc.getPetsProp)
    }

    // assert pets
    expect(pets).not.toBeUndefined
    expect(pets).not.toBeNull
    expect(pets).toEqual(expect.arrayContaining<Pet>([
      expect.any(Object) // that matches the interface.
    ]))

    // assert petsWithSameName
    expect(pwsn).not.toBeUndefined
    expect(pwsn).not.toBeNull
    expect(pets).toEqual(expect.arrayContaining<PetsWithSameName>([
      expect.any(Object) // that matches the interface.
    ]))
  })
})
