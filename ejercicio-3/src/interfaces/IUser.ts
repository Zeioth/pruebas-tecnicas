// Inteface for the data returned by the endpoint 'user'.

/** Structure of a user object. */
export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
}
