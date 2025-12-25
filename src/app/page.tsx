import { Button } from '@/components/ui/Button'
import { BarChart, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white rounded-lg p-2">
              <Users size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Student Management</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="secondary">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Modern Student Management
          <span className="block text-blue-600 mt-2">Made Simple</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your student records with our powerful, AI-enhanced platform.
          Track progress, generate insights, and manage your classroom efficiently.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Student Records
            </h3>
            <p className="text-gray-600">
              Comprehensive student profiles with all essential information in one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security with encrypted data and role-based access.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Generate intelligent insights and reports with cutting-edge AI technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Analytics
            </h3>
            <p className="text-gray-600">
              Track trends, monitor progress, and make data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Created by{' '}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Priyansh Kotak
              </a>
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a
                href="https://github.com/Priyansh-Kotak?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                GitHub
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://www.linkedin.com/in/priyanshkotak/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              © 2025 Student Management System. Built with Next.js 15 & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}