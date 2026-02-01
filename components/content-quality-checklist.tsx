'use client'

import { Check, AlertCircle } from 'lucide-react'

export interface QualityCheckItem {
  id: string
  name: string
  description: string
  status: 'pass' | 'warn' | 'fail'
  details?: string
}

interface ContentQualityChecklistProps {
  items: QualityCheckItem[]
  title?: string
}

export function ContentQualityChecklist({ items, title = 'Content Quality Metrics' }: ContentQualityChecklistProps) {
  const stats = {
    pass: items.filter(i => i.status === 'pass').length,
    warn: items.filter(i => i.status === 'warn').length,
    fail: items.filter(i => i.status === 'fail').length,
  }

  const score = Math.round((stats.pass / items.length) * 100)

  return (
    <div className="bg-background border border-border rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* Score Overview */}
      <div className="mb-6 p-4 bg-muted/50 rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-2xl font-bold text-green-600">{score}%</p>
            <p className="text-sm text-muted-foreground">Overall Score</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">{stats.pass}</p>
            <p className="text-sm text-muted-foreground">Passed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-600">{stats.warn}</p>
            <p className="text-sm text-muted-foreground">Warnings</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{stats.fail}</p>
            <p className="text-sm text-muted-foreground">Failed</p>
          </div>
        </div>
      </div>

      {/* Checks List */}
      <div className="space-y-3">
        {items.map((item) => {
          const statusConfig = {
            pass: { icon: Check, color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
            warn: { icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
            fail: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
          }[item.status]

          const Icon = statusConfig.icon

          return (
            <div key={item.id} className={`border rounded-lg p-3 ${statusConfig.bg}`}>
              <div className="flex items-start gap-3">
                <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${statusConfig.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {item.details && (
                    <p className="text-xs text-muted-foreground/70 mt-1">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
