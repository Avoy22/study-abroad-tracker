import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import type { DashboardStat } from '../../types/dashboard'
import { cn } from '../../utils/cn'
import { Card } from './Card'

type StatCardProps = {
  stat: DashboardStat
}

const accentClasses: Record<DashboardStat['accent'], string> = {
  blue: 'bg-blue-50 text-blue-700',
  cyan: 'bg-cyan-50 text-cyan-700',
  emerald: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
}

export function StatCard({ stat }: StatCardProps) {
  const TrendIcon =
    stat.trend === 'up' ? ArrowUpRight : stat.trend === 'down' ? ArrowDownRight : ArrowRight

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <p className="mt-3 text-2xl font-bold text-slate-950">{stat.value}</p>
        </div>
        <div className={cn('grid h-11 w-11 place-items-center rounded-lg', accentClasses[stat.accent])}>
          <stat.icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
        <TrendIcon className="h-4 w-4 text-blue-600" />
        <span>{stat.helper}</span>
      </div>
    </Card>
  )
}
