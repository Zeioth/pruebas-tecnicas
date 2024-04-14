// Inteface for the data returned by the endpoint 'pet'.

/** Accepted values for pet status. */
export enum PetStatus {
  Available = "available",
  Pending = "pending",
  Sold = "sold",
}

/** Interface of a pet object. */
export interface Pet {
  id: number;
  category: string;
  name: string;
  photoUrls: [];
  tags: [];
  status: string;
}

/** Interface returned by the method `PetController.countPetsWithSameName()`. */
export interface PetsWithSameName {
  [name: string]: number;
}

