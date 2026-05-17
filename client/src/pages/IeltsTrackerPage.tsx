import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { ieltsScores, ieltsTrendData } from '../data/mockData'

export function IeltsTrackerPage() {
  return (
    <div>
      <PageHeader
        actions={<Button>Log mock test</Button>}
        description="Band score targets and practice progress for each IELTS skill."
        eyebrow="Test readiness"
        title="IELTS Tracker"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ieltsScores.map((score) => {
          const progress = Math.round((score.current / score.target) * 100)

          return (
            <Card className="p-4" key={score.skill}>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-950">{score.skill}</h3>
                <Badge tone={score.current >= score.target ? 'emerald' : 'blue'}>{progress}%</Badge>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-950">{score.current.toFixed(1)}</p>
              <p className="mt-1 text-sm text-slate-500">Target {score.target.toFixed(1)}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </Card>
          )
        })}
      </section>

      <Card className="mt-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-950">Band score trend</h3>
            <p className="mt-1 text-sm text-slate-500">Monthly mock test average against target</p>
          </div>
          <Badge tone="cyan">Recharts</Badge>
        </div>
        <div className="h-80">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={ieltsTrendData}>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis dataKey="label" stroke="#64748b" />
              <YAxis domain={[5.5, 8.5]} stroke="#64748b" />
              <Tooltip />
              <Line dataKey="score" stroke="#2563eb" strokeWidth={3} type="monotone" />
              <Line dataKey="target" stroke="#0891b2" strokeDasharray="5 5" strokeWidth={2} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
