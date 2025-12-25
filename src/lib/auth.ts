import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

interface JwtPayload {
  userId: string; // Logged-in user's ID
  email: string; // User email
  role: string; // User role (admin/user)
  iat?: number; // Issued-at timestamp (added by JWT)
  exp?: number; // Expiry timestamp (added by JWT)
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(
  userId: string,
  email: string,
  role: string
): string {
  return jwt.sign({ userId, email, role }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    return null;
  }
}

export async function getCurrentUser(
  request: NextRequest
): Promise<JwtPayload | null> {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return null;
  }

  const decoded = verifyToken(token);
  return decoded;
}
