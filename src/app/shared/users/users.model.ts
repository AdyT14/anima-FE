export interface User {
  id?: string;
  email: string;
  name: string;
  password?: string;
}

export interface RegistrationStatus {
  result: boolean;
  message: string;
}
