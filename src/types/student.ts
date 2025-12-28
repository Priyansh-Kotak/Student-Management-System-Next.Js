// src/types/student.ts
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string; // Added since Form uses it
  grade: string;
  address?: string;
  parentName?: string;
  parentPhone?: string;
  notes?: string;
  status: "ACTIVE" | "INACTIVE" | "GRADUATED";
}

export interface User {
  id: string
  name: string
  email: string
  role: 'USER' | 'ADMIN'
}