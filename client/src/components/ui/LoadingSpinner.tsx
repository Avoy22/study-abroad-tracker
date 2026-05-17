import { cn } from '../../utils/cn'

type LoadingSpinnerProps = {
  className?: string
  label?: string
}

export function LoadingSpinner({ className, label = 'Loading' }: LoadingSpinnerProps) {
  return (
    <div className={cn('inline-flex items-center gap-2 text-sm font-medium text-slate-600', className)}>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
      <span>{label}</span>
    </div>
  )
}
