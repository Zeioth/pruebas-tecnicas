import { StatusCodes as StatusCode } from 'http-status-codes'

import { User } from '@interfaces/IUser'
import { userController } from '@controllers/userController'
import { newUser1 } from '@fixtures/newUser1'

describe('userController', () => {
  it('should POST user(s) by calling createUsers() and expect a OK status code.', async () => {
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

  it('should GET a user by calling getUser() and expect a `User` interface.', async () => {
    // arrange
    let user = null

    // act
    user = await userController.getUser(newUser1[0].username)

    // assert
    expect(user).not.toBeUndefined
    expect(user).not.toBeNull
    expect(user).toMatchObject<User>
  })
})
