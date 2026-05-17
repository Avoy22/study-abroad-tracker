import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  eyebrow?: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({ actions, description, eyebrow, title }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{eyebrow}</p>
        ) : null}
        <h2 className="mt-1 text-2xl font-bold text-slate-950 sm:text-3xl">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  )
}
