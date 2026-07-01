export type UserRole = "donor" | "volunteer" | "ngo" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  address?: string;
}