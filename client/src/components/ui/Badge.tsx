import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type BadgeTone = 'blue' | 'cyan' | 'emerald' | 'amber' | 'slate' | 'red'

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const toneClasses: Record<BadgeTone, string> = {
  blue: 'bg-blue-50 text-blue-700 ring-blue-200',
  cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-200',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  amber: 'bg-amber-50 text-amber-700 ring-amber-200',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
  red: 'bg-red-50 text-red-700 ring-red-200',
}

export function Badge({ children, className, tone = 'slate' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
