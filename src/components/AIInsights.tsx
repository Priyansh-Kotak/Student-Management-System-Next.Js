'use client'

import { useState } from 'react'

export function AIInsights() {
  const [report, setReport] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateReport = async () => {
    setLoading(true)
    setError('')
    setReport('')

    try {
      const response = await fetch('/api/ai/generate-report', {
        method: 'POST',
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to generate report')
        return
        }

  setReport(data.report)
} catch (err) {
  setError('An error occurred while generating the report')
} finally {
  setLoading(false)
}}}

return (
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
<Sparkles className="text-yellow-500" />
AI-Powered Insights
</CardTitle>
</CardHeader>
<CardContent>
{!report && !loading && (
<div className="text-center py-8">
<p className="text-gray-600 mb-4">
Generate an AI-powered analysis of your student data
</p>
<Button onClick={generateReport} className="flex items-center gap-2">
<Sparkles size={20} />
Generate Report
</Button>
</div>
)}

{loading && (
      <div className="text-center py-8">
        <Loader2 className="animate-spin mx-auto mb-4 text-blue-600" size={48} />
        <p className="text-gray-600">Analyzing your student data...</p>
      </div>
    )}

    {error && (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    )}

    {report && (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <div className="whitespace-pre-wrap text-gray-700">{report}</div>
        </div>
        <Button
          variant="secondary"
          onClick={generateReport}
          className="flex items-center gap-2"
        >
          <Sparkles size={16} />
          Regenerate Report
        </Button>
      </div>
    )}
  </CardContent>
</Card>
)}