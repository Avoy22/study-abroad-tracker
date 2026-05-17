import { CalendarPlus } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHeader } from '../components/ui/PageHeader'
import { deadlines } from '../data/mockData'

const priorityTone = {
  High: 'red',
  Medium: 'amber',
  Low: 'slate',
} as const

const typeTone = {
  Application: 'blue',
  Scholarship: 'emerald',
  Visa: 'cyan',
  Test: 'amber',
} as const

export function DeadlinesPage() {
  return (
    <div>
      <PageHeader
        actions={
          <Button>
            <CalendarPlus className="h-4 w-4" />
            Add deadline
          </Button>
        }
        description="Prioritized dates across universities, scholarships, tests, and visa preparation."
        eyebrow="Calendar"
        title="Deadlines"
      />

      <section className="grid gap-4">
        {deadlines.map((deadline) => (
          <Card className="p-4" key={deadline.id}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-950">{deadline.title}</h3>
                  <Badge tone={typeTone[deadline.type]}>{deadline.type}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600">{deadline.school}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                  {deadline.date}
                </p>
                <Badge tone={priorityTone[deadline.priority]}>{deadline.priority}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  )
}
