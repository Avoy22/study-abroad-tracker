import { Plus } from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { StatCard } from '../components/ui/StatCard'
import {
  applicationProgressData,
  dashboardStats,
  deadlines,
  studyLogs,
  weeklyStudyData,
} from '../data/mockData'

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            Add study log
          </Button>
        }
        description="Track the work that moves applications forward: practice, documents, deadlines, and score progress."
        eyebrow="Overview"
        title="Dashboard"
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-950">Weekly study load</h3>
              <p className="mt-1 text-sm text-slate-500">Hours logged by day</p>
            </div>
            <Badge tone="blue">Mock data</Badge>
          </div>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <AreaChart data={weeklyStudyData}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Area dataKey="hours" fill="#bfdbfe" stroke="#2563eb" strokeWidth={3} type="monotone" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-5">
            <h3 className="font-bold text-slate-950">Application pipeline</h3>
            <p className="mt-1 text-sm text-slate-500">Current application stage count</p>
          </div>
          <div className="h-72">
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={applicationProgressData}>
                <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                <XAxis dataKey="label" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="applications" fill="#0891b2" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card>
          <h3 className="font-bold text-slate-950">Recent study logs</h3>
          <div className="mt-4 grid gap-3">
            {studyLogs.slice(0, 3).map((log) => (
              <div className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between" key={log.id}>
                <div>
                  <p className="font-semibold text-slate-950">{log.subject}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {log.date} | {log.durationHours}h
                  </p>
                </div>
                <Badge tone={log.status === 'Completed' ? 'emerald' : 'amber'}>{log.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-slate-950">Upcoming deadlines</h3>
          <div className="mt-4 grid gap-3">
            {deadlines.slice(0, 3).map((deadline) => (
              <div className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between" key={deadline.id}>
                <div>
                  <p className="font-semibold text-slate-950">{deadline.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {deadline.school} | {deadline.date}
                  </p>
                </div>
                <Badge tone={deadline.priority === 'High' ? 'red' : 'slate'}>{deadline.priority}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
