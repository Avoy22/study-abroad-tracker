import type { LucideIcon } from 'lucide-react'

export type StatTrend = 'up' | 'down' | 'neutral'

export type DashboardStat = {
  label: string
  value: string
  helper: string
  trend: StatTrend
  accent: 'blue' | 'cyan' | 'emerald' | 'amber'
  icon: LucideIcon
}

export type StudyLog = {
  id: string
  subject: string
  date: string
  durationHours: number
  focus: string
  status: 'Completed' | 'Planned'
}

export type Deadline = {
  id: string
  title: string
  school: string
  date: string
  priority: 'High' | 'Medium' | 'Low'
  type: 'Application' | 'Scholarship' | 'Visa' | 'Test'
}

export type IeltsScore = {
  skill: 'Listening' | 'Reading' | 'Writing' | 'Speaking'
  current: number
  target: number
}

export type ChartPoint = {
  label: string
  hours?: number
  applications?: number
  score?: number
  target?: number
}
