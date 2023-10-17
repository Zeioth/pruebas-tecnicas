/**
 * COMMENTS:
 * We would normally separate all these elements in different files,
 * but for the sake of making the life of our reviewer simplier,
 * let's keep things self contained on this file.
 */

import fetch from "node-fetch";

// INTERFACES
// ===========================================================================

/** Structure of a user object. */
interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}

// CONSTANTS
// ===========================================================================

// A example user
const newUser: User[] = [
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

// FUNCTIONS
// ===========================================================================

/**
 * POST a user and print the server response on screen.
 *
 * @param newUser - A User[] collection.
 * @returns Type and description of the returned object.
 *
 * @example
 * ```
 * createUser(User[]);
 * ```
 */
async function createUser(newUser: User[]) {
  try {
    // Define the API endpoint URL for creating a user
    const createUserUrl = "https://petstore.swagger.io/v2/user/createWithArray";

    // Define the request options for creating a user, including the API key
    const createUserOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        api_key: "special-key",
      },
      body: JSON.stringify(newUser),
    };

    // Make the POST request to create the user using node-fetch
    const response = await fetch(createUserUrl, createUserOptions);

    if (response.ok) {
      const data = await response.json();
      console.log("POST NEW USER OK:", data);
    } else {
      console.error(
        "POST USER Request failed with Status Code:",
        response.status,
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

/**
 * GET a user and print the server response on screen.
 *
 * @param username - The field username of a user.
 * @returns void
 *
 * @example
 * ```
 * createUser("Alex");
 * ```
 */
async function getUser(username: string) {
  try {
    const getUserUrl = `https://petstore.swagger.io/v2/user/${username}`;
    const response = await fetch(getUserUrl);

    if (response.ok) {
      const data = await response.json();
      console.log("GET USER OK:", data);
    } else {
      console.error(
        "GET USER Request Failed with Status Code:",
        response.status,
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// ENTRY POINT
// ===========================================================================
async function main() {
  await createUser(newUser);
  await getUser("adlop");
}
main();
