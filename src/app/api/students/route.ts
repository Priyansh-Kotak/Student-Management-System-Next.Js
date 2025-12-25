import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET all students
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const students = await prisma.student.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(students);
  } catch (error) {
    console.error("Get students error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// CREATE new student
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    // Check if email already exists
    const existingStudent = await prisma.student.findUnique({
      where: { email: data.email },
    });

    if (existingStudent) {
      return NextResponse.json(
        { error: "Student with this email already exists" },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: {
        ...data,
        userId: user.userId,
        dateOfBirth: new Date(data.dateOfBirth),
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("Create student error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
