'use client'

import { Navbar } from '@/components/Navbar'
import { StudentCard } from '@/components/StudentCard'
import { StudentForm } from '@/components/StudentForm'
import { Button } from '@/components/ui/Button'
import { Student, User } from '@/types/student'
import { Plus, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const router = useRouter()
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | undefined>(undefined)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetchUser()
    fetchStudents()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data)
      } else {
        // If unauthorized, redirect to login
        router.push('/login')
      }
    } catch (error) {
      console.error('Error fetching user:', error)
      router.push('/login')
    }
  }

  const fetchStudents = async () => {
    try {
      const response = await fetch('/api/students')
      if (response.ok) {
        const data = await response.json()
        setStudents(data)
      }
    } catch (error) {
      console.error('Error fetching students:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/students/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setStudents(students.filter((s: Student) => s.id !== id))
      }
    } catch (error) {
      console.error('Error deleting student:', error)
    }
  }

  const handleEdit = (student: Student) => {
    setEditingStudent(student)
    setShowForm(true)
  }

  const handleFormSuccess = () => {
    setShowForm(false)
    setEditingStudent(undefined)
    fetchStudents()
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingStudent(undefined)
  }

  // Show loading while fetching user
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName={user.name} userEmail={user.email} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!showForm ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="text-blue-600" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Students
                  </h2>
                  <p className="text-gray-600">
                    {students.length} total student{students.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2"
              >
                <Plus size={20} />
                Add Student
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Loading students...</p>
              </div>
            ) : students.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <Users size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No students yet
                </h3>
                <p className="text-gray-600 mb-4">
                  Get started by adding your first student
                </p>
                <Button onClick={() => setShowForm(true)}>
                  <Plus size={20} className="mr-2" />
                  Add Your First Student
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student: Student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="max-w-2xl mx-auto">
            <StudentForm
              student={editingStudent}
              onSuccess={handleFormSuccess}
              onCancel={handleCancel}
            />
          </div>
        )}
      </main>
    </div>
  )
}