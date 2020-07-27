export interface User {
  id?: string;
  email: string;
  name: string;
}

export interface NewUser extends User {
  password: string;
}

export interface RegistrationStatus {
  result: boolean;
  message: string;
}
