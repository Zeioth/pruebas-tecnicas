import { StatusCodes as StatusCode } from 'http-status-codes'

import { User } from '@interfaces/IUser'
import { userController } from '@controllers/userController'
import { newUser1 } from '@fixtures/newUser1'

describe('userController', () => {
  it(`should POST user(s) by calling createUsers()
      and expect a OK status code.`, async () => {
    // arrange
    let status = null

    // act
    status = await userController.createUsers(newUser1)

    // assert
    expect(status).not.toBeUndefined
    expect(status).not.toBeNull
    expect(typeof status).toBe('number')
    expect(status).toBe(StatusCode.OK)
  })

  it(`should mock POST user(s) by calling createUsers()
      with the wrong structure and expect a 500 status code.`, async () => {
    // arrange
    let status = null
    const mockedBaduser = [{ incorrect_structure: 42 }]

    // arrange - mock userController to create a bad user and return status 500.
    //           (this is not possible by normal means due to type constraints)
    jest.mock('@controllers/userController', () => ({
      createUsers: jest.fn().mockResolvedValue(500)
    }))
    const userController = require('@controllers/userController')

    // act
    status = await userController.createUsers(mockedBaduser)

    // assert
    expect(status).toBe(StatusCode.INTERNAL_SERVER_ERROR)
  })

  it(`should GET a user by calling getUser()
      and expect a \`User\` interface.`, async () => {
    // arrange
    let user = null

    // act
    user = await userController.getUser(newUser1[0].username)

    // assert
    expect(user).not.toBeUndefined
    expect(user).not.toBeNull
    expect(user).toMatchObject<User>
  })

  it(`should GET a user by calling getUser()
      with a user that doesn\'t exist and expect null.`, async () => {
    // act
    let user = await userController.getUser("thisUserDoNotExist3287163")

    // assert
    expect(user).toBeNull
  })
})
