import { BookOpenCheck, Plus } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { studyLogs } from '../data/mockData'

export function StudyLogsPage() {
  return (
    <div>
      <PageHeader
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            New log
          </Button>
        }
        description="A clean record of practice blocks, research sessions, and application work."
        eyebrow="Focus history"
        title="Study Logs"
      />

      <Card className="overflow-hidden p-0">
        <div className="grid border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr]">
          <span>Session</span>
          <span className="hidden md:block">Focus</span>
          <span className="hidden md:block">Duration</span>
          <span className="hidden md:block">Status</span>
        </div>
        <div className="divide-y divide-slate-200">
          {studyLogs.map((log) => (
            <div className="grid gap-3 px-5 py-4 md:grid-cols-[1.2fr_0.8fr_0.6fr_0.6fr] md:items-center" key={log.id}>
              <div>
                <p className="font-semibold text-slate-950">{log.subject}</p>
                <p className="mt-1 text-sm text-slate-500">{log.date}</p>
              </div>
              <p className="text-sm text-slate-600">{log.focus}</p>
              <p className="text-sm font-semibold text-slate-950">{log.durationHours}h</p>
              <Badge tone={log.status === 'Completed' ? 'emerald' : 'amber'}>{log.status}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6">
        <EmptyState
          description="Your next saved session will appear here with duration, topic, and completion state."
          icon={BookOpenCheck}
          title="Ready for the next focused block"
        />
      </div>
    </div>
  )
}
