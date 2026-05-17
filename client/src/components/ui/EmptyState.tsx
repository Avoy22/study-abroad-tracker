import type { LucideIcon } from 'lucide-react'
import { FileSearch } from 'lucide-react'
import { Button } from './Button'

type EmptyStateProps = {
  title: string
  description: string
  actionLabel?: string
  icon?: LucideIcon
}

export function EmptyState({
  actionLabel,
  description,
  icon: Icon = FileSearch,
  title,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-white text-blue-600 shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{description}</p>
      {actionLabel ? <Button className="mt-5">{actionLabel}</Button> : null}
    </div>
  )
}
