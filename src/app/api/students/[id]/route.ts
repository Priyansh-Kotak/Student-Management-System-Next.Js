import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET single student
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { id } = await params; // Await params!
    
    const student = await prisma.student.findFirst({
      where: {
        id: id,
        userId: user.userId,
      },
    });
    
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    
    return NextResponse.json(student);
  } catch (error) {
    console.error("Get student error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// UPDATE student
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { id } = await params; // Await params!
    const data = await request.json();
    
    // Check if email is being changed and already exists
    if (data.email) {
      const existingStudent = await prisma.student.findFirst({
        where: {
          email: data.email,
          id: { not: id },
        },
      });
      
      if (existingStudent) {
        return NextResponse.json(
          { error: "A student with this email already exists" },
          { status: 400 }
        );
      }
    }
    
    // Verify student exists and belongs to user
    const existingStudent = await prisma.student.findFirst({
      where: {
        id: id,
        userId: user.userId,
      },
    });
    
    if (!existingStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    
    // Update the student
    const updatedStudent = await prisma.student.update({
      where: { id: id },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : existingStudent.dateOfBirth,
        grade: data.grade,
        address: data.address,
        parentName: data.parentName,
        parentPhone: data.parentPhone,
        notes: data.notes,
        status: data.status,
      },
    });
    
    return NextResponse.json(updatedStudent);
  } catch (error: any) {
    console.error("Update student error:", error);
    
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: "A student with this email already exists" },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE student
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getCurrentUser(request);
    
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const { id } = await params; // Await params!
    
    const result = await prisma.student.deleteMany({
      where: {
        id: id,
        userId: user.userId,
      },
    });
    
    if (result.count === 0) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Delete student error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}