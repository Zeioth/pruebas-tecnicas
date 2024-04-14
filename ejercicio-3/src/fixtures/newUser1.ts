import { User } from '../interfaces/IUser.js'

/** Example data to insert a new user into the endpoint
 * https://petstore.swagger.io/v2/user/createWithArray
 *
 * @example
 * ```
 * await userController.createUser(newUser1)
 * ```
 * */
export const newUser1: User[] = [
  {
    id: 0,
    username: "adlop",
    firstName: "adrian",
    lastName: "lopez",
    email: "test1@gmail.com",
    password: "test",
    phone: "",
    userStatus: 0,
  },
];
