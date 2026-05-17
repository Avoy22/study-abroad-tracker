import type { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
}

export function Input({ className, helperText, id, label, ...props }: InputProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700" htmlFor={id}>
      {label ? <span>{label}</span> : null}
      <input
        className={cn(
          'h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100',
          className,
        )}
        id={id}
        {...props}
      />
      {helperText ? <span className="text-xs font-normal text-slate-500">{helperText}</span> : null}
    </label>
  )
}
