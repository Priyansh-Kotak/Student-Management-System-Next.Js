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
            <h1 className="text-xl font-bold text-gray-900">
              Student Management
            </h1>
          </div>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="h-10 px-4 inline-flex items-center justify-center rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="h-10 px-4 inline-flex items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Modern Student Management
          <span className="block text-blue-600 mt-2">
            Made Simple
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your student records, track progress, and generate
          AI-powered insights with ease.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="h-11 px-8 inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-lg hover:bg-blue-700 transition"
          >
            Start Free Trial
          </Link>

          <Link
            href="/login"
            className="h-11 px-8 inline-flex items-center justify-center rounded-md bg-gray-200 text-gray-900 text-lg hover:bg-gray-300 transition"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={<Users size={24} />}
            title="Student Records"
            text="All essential student information in one place."
            color="blue"
          />

          <Feature
            icon={<Shield size={24} />}
            title="Secure & Private"
            text="Enterprise-grade security and encrypted data."
            color="green"
          />

          <Feature
            icon={<Zap size={24} />}
            title="AI Powered"
            text="Smart insights and automated reports."
            color="purple"
          />

          <Feature
            icon={<BarChart size={24} />}
            title="Analytics"
            text="Track progress and performance trends."
            color="orange"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
          <p className="mb-2">
            Created by{' '}
            <a
              href="https://github.com/Priyansh-Kotak"
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
              className="hover:text-blue-600"
            >
              GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.linkedin.com/in/priyanshkotak/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            © 2025 Student Management System
          </p>
        </div>
      </footer>
    </div>
  )
}

/* Feature Card */
function Feature({
  icon,
  title,
  text,
  color,
}: {
  icon: React.ReactNode
  title: string
  text: string
  color: 'blue' | 'green' | 'purple' | 'orange'
}) {
  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors[color]}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}