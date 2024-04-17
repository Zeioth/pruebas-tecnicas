import axios from 'axios'
import logger from '../services/logger.service'
import { User } from '../interfaces/IUser'

/** Class to manage the 'user' entpoint. */
export class UserController {
  /**
   * POST one or many users.
   *
   * @param newUser - A User[] collection.
   * @returns number if the status code, if the request is successful.
   *          null if there is an error (it will be logged).
   *
   * @example
   * ```
   * userController.createUser([{
   *   id: 0,
   *   username: "",
   *   firstName: "",
   *   lastName: "",
   *   email: "",
   *   password: "",
   *   phone: "",
   *   userStatus: 0
   * }], ...)
   * ```
   */
  async createUsers(newUser: User[]): Promise<number | null> {
    const url = 'https://petstore.swagger.io/v2/user/createWithArray'
    try {
      const response = await axios.post(url, newUser)
      return response.status
    } catch (error) {
      logger.error(error)
      return null
    }
  }

  /**
   * GET a user.
   *
   * @param username - The field username of a user.
   * @returns User if the request is successful.
   *          null if there is an error (it will be logged).
   *
   * @example
   * ```
   * const user = userController.getUser("Alex")
   * ```
   */
  async getUser(username: string): Promise<User | null> {
    const url = `https://petstore.swagger.io/v2/user/${username}`
    try {
      const response = await axios.get(url)
      return response.data as User
    } catch (error) {
      logger.error(error)
      return null
    }
  }
}

/** Singleton of the class UserController.*/
export const userController = new UserController()
