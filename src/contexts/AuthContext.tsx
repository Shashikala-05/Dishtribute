import React, { createContext, useContext, useState, useCallback } from "react";

export type UserRole = "donor" | "volunteer" | "ngo" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  address?: string;
}

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  login: (email: string, password: string) => boolean;
  signup: (user: Omit<User, "id">) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const defaultUsers: User[] = [
  { id: "admin-1", name: "Admin User", email: "admin@foodshare.com", password: "admin123", role: "admin" },
  { id: "donor-1", name: "Raj Sharma", email: "raj@example.com", password: "pass123", role: "donor", phone: "9876543210", address: "Koramangala, Bangalore" },
  { id: "ngo-1", name: "Hope Orphanage", email: "hope@ngo.com", password: "pass123", role: "ngo", address: "Indiranagar, Bangalore" },
  { id: "vol-1", name: "Priya Volunteer", email: "priya@example.com", password: "pass123", role: "volunteer", phone: "9988776655" },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  }, [users]);

  const signup = useCallback((userData: Omit<User, "id">) => {
    if (users.find((u) => u.email === userData.email)) return false;
    const newUser: User = { ...userData, id: `user-${Date.now()}` };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return true;
  }, [users]);

  const logout = useCallback(() => setCurrentUser(null), []);

  return (
    <AuthContext.Provider value={{ currentUser, users, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
