import { Pet, PetsWithSameName, PetStatus } from '../../src/interfaces/IPet'
import { petController } from '../../src/controllers/petController'
import { arrayOfPets1 } from '../../src/fixtures/arrayOfPets'

describe('petController', () => {
  it('should GET a list of pets by calling getPets() and expect a `Pet[]` interface.', async () => {
    // arrange
    let pets = null

    // act
    pets = await petController.getPets(PetStatus.Sold)

    // assert
    expect(pets).not.toBeUndefined
    expect(pets).not.toBeNull
    expect(pets).toMatchObject<Pet[]>
  }),

  it('should GET a list of pets by calling countPetsWithSameName() and expect a `PetsWithSameName[]` interface.', async () => {
    // arrange
    const pets: Pet[] = arrayOfPets1
    let petsWithSameName: PetsWithSameName|null = null

    // act
    petsWithSameName = await petController.countPetsWithSameName(pets)

    // assert
    expect(petsWithSameName).not.toBeUndefined
    expect(petsWithSameName).not.toBeNull
    expect(petsWithSameName).toMatchObject<PetsWithSameName[]>
  })
})
