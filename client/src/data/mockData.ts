import {
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  GraduationCap,
} from 'lucide-react'
import type { ChartPoint, DashboardStat, Deadline, IeltsScore, StudyLog } from '../types/dashboard'

export const dashboardStats: DashboardStat[] = [
  {
    label: 'Weekly study',
    value: '18.5h',
    helper: '+3.2h from last week',
    trend: 'up',
    accent: 'blue',
    icon: BookOpenCheck,
  },
  {
    label: 'IELTS average',
    value: '7.2',
    helper: 'Target band 7.5',
    trend: 'up',
    accent: 'cyan',
    icon: BarChart3,
  },
  {
    label: 'Active applications',
    value: '6',
    helper: '3 priority schools',
    trend: 'neutral',
    accent: 'emerald',
    icon: GraduationCap,
  },
  {
    label: 'Upcoming deadlines',
    value: '4',
    helper: 'Next due in 5 days',
    trend: 'down',
    accent: 'amber',
    icon: CalendarClock,
  },
]

export const studyLogs: StudyLog[] = [
  {
    id: 'log-1',
    subject: 'IELTS Writing Task 2',
    date: 'May 18, 2026',
    durationHours: 2,
    focus: 'Argument structure and cohesion',
    status: 'Completed',
  },
  {
    id: 'log-2',
    subject: 'University shortlist research',
    date: 'May 17, 2026',
    durationHours: 1.5,
    focus: 'Scholarship eligibility notes',
    status: 'Completed',
  },
  {
    id: 'log-3',
    subject: 'IELTS Listening practice',
    date: 'May 19, 2026',
    durationHours: 1,
    focus: 'Section 3 and 4 accuracy',
    status: 'Planned',
  },
]

export const deadlines: Deadline[] = [
  {
    id: 'deadline-1',
    title: 'Submit SOP draft',
    school: 'University of Melbourne',
    date: 'May 23, 2026',
    priority: 'High',
    type: 'Application',
  },
  {
    id: 'deadline-2',
    title: 'Scholarship form',
    school: 'University of Toronto',
    date: 'May 27, 2026',
    priority: 'High',
    type: 'Scholarship',
  },
  {
    id: 'deadline-3',
    title: 'IELTS mock test',
    school: 'British Council Prep',
    date: 'June 1, 2026',
    priority: 'Medium',
    type: 'Test',
  },
  {
    id: 'deadline-4',
    title: 'Visa document checklist',
    school: 'Canada SDS',
    date: 'June 8, 2026',
    priority: 'Low',
    type: 'Visa',
  },
]

export const ieltsScores: IeltsScore[] = [
  { skill: 'Listening', current: 7.5, target: 8 },
  { skill: 'Reading', current: 7, target: 7.5 },
  { skill: 'Writing', current: 6.5, target: 7 },
  { skill: 'Speaking', current: 7.5, target: 7.5 },
]

export const weeklyStudyData: ChartPoint[] = [
  { label: 'Mon', hours: 2.5 },
  { label: 'Tue', hours: 3 },
  { label: 'Wed', hours: 1.5 },
  { label: 'Thu', hours: 4 },
  { label: 'Fri', hours: 2 },
  { label: 'Sat', hours: 3.5 },
  { label: 'Sun', hours: 2 },
]

export const applicationProgressData: ChartPoint[] = [
  { label: 'Shortlist', applications: 12 },
  { label: 'Docs', applications: 8 },
  { label: 'Review', applications: 5 },
  { label: 'Submitted', applications: 3 },
]

export const ieltsTrendData: ChartPoint[] = [
  { label: 'Jan', score: 6.2, target: 7.5 },
  { label: 'Feb', score: 6.4, target: 7.5 },
  { label: 'Mar', score: 6.8, target: 7.5 },
  { label: 'Apr', score: 7, target: 7.5 },
  { label: 'May', score: 7.2, target: 7.5 },
]
