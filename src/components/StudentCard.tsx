'use client'

import { Student } from '@/types/student'
import { Calendar, Edit, Mail, Phone, Trash2 } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'

interface StudentCardProps {
  student: Student
  onEdit: (student: Student) => void
  onDelete: (id: string) => void
}

export function StudentCard({ student, onEdit, onDelete }: StudentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800'
      case 'INACTIVE':
        return 'bg-gray-100 text-gray-800'
      case 'GRADUATED':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {student.firstName} {student.lastName}
            </h3>
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${getStatusColor(
                student.status
              )}`}
            >
              {student.status}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onEdit(student)}
            >
              <Edit size={16} />
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                if (confirm('Are you sure you want to delete this student?')) {
                  onDelete(student.id)
                }
              }}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{student.email}</span>
          </div>
          {student.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{student.phone}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>Grade: {student.grade}</span>
          </div>
          {student.parentName && (
            <div className="mt-3 pt-3 border-t">
              <p className="font-medium text-gray-700">Parent/Guardian:</p>
              <p>{student.parentName}</p>
              {student.parentPhone && <p>{student.parentPhone}</p>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}