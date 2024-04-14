// TODO: Please note we are using console.log() only as example. In production
//       we must use an actual logging library so we can monitor properly.

import fetch from 'node-fetch'
import { User } from '../interfaces/IUser.js'

/** Class to manage the 'user' entpoint. */
export class UserController {
  /**
   * POST a user and print the server response on screen.
   *
   * @param newUser - A User[] collection.
   * @returns Promise<void>
   *
   * @example
   * ```
   * createUser(User[])
   * ```
   */
  async createUser(newUser: User[]): Promise<void> {
    try {
      // Define the API endpoint URL for creating a user
      const url = "https://petstore.swagger.io/v2/user/createWithArray"

      // Define the request options for creating a user, including the API key
      const createUserOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_key: "special-key",
        },
        body: JSON.stringify(newUser),
      }

      // Make the POST request to create the user using node-fetch
      const response = await fetch(url, createUserOptions)

      if (!response.ok) {
        console.log("POST NEW USER - ERROR with status code:", response.status)
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * GET a user and print the server response on screen.
   *
   * @param username - The field username of a user.
   * @returns A object with the interface User, or null if the request fails.
   *
   * @example
   * ```
   * getUser("Alex")
   * ```
   */
  async getUser(username: string): Promise<User | null> {
    try {
      const getUserUrl = `https://petstore.swagger.io/v2/user/${username}`
      const response = await fetch(getUserUrl)

      if (response.ok) {
        const user = await response.json()
        return user as User
      } else {
        console.log("GET USER - Request Failed with Status Code: ", response.status)
        return null
      }
    } catch (error) {
      console.log("GET USER - Error:", error)
      return null
    }
  }
}

/** Singleton of the class UserController.*/
export const userController = new UserController()
