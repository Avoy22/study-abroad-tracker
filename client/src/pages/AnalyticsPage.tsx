import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { PageHeader } from '../components/ui/PageHeader'
import { applicationProgressData, ieltsTrendData, weeklyStudyData } from '../data/mockData'

export function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        description="Portfolio-ready visual placeholders for study load, IELTS growth, and application progress."
        eyebrow="Insights"
        title="Analytics"
      />

      <div className="mb-4 flex items-center justify-between rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
        <p className="text-sm font-semibold text-blue-800">Mock analytics snapshot</p>
        <LoadingSpinner label="Ready" />
      </div>

      <section className="grid gap-6 xl:grid-cols-2">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-bold text-slate-950">Study consistency</h3>
            <Badge tone="blue">Hours</Badge>
          </div>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={weeklyStudyData}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="hours" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-bold text-slate-950">IELTS score movement</h3>
            <Badge tone="cyan">Band</Badge>
          </div>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <LineChart data={ieltsTrendData}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="#64748b" />
                <YAxis domain={[5.5, 8.5]} stroke="#64748b" />
                <Tooltip />
                <Line dataKey="score" stroke="#0891b2" strokeWidth={3} type="monotone" />
                <Line dataKey="target" stroke="#2563eb" strokeDasharray="5 5" strokeWidth={2} type="monotone" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <Card className="mt-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-bold text-slate-950">Application progress</h3>
          <Badge tone="emerald">Pipeline</Badge>
        </div>
        <div className="h-80">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart data={applicationProgressData} layout="vertical">
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis stroke="#64748b" type="number" />
              <YAxis dataKey="label" stroke="#64748b" type="category" width={90} />
              <Tooltip />
              <Bar dataKey="applications" fill="#10b981" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  )
}
