import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  Gauge,
  GraduationCap,
  Target,
  UserRound,
  X,
} from 'lucide-react'
import { NavLink } from 'react-router'
import { cn } from '../../utils/cn'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { label: 'Study Logs', href: '/study-logs', icon: BookOpenCheck },
  { label: 'IELTS Tracker', href: '/ielts-tracker', icon: Target },
  { label: 'Deadlines', href: '/deadlines', icon: CalendarDays },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Profile', href: '/profile', icon: UserRound },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-950/50 transition lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-slate-950 text-white transition-transform lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <NavLink className="flex items-center gap-3" onClick={onClose} to="/dashboard">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wide text-blue-200">
                Study Abroad
              </span>
              <span className="block text-base font-bold">Tracker</span>
            </span>
          </NavLink>
          <button
            aria-label="Close navigation"
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-300 hover:bg-white/10 lg:hidden"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="grid gap-1 px-3">
          {navigation.map((item) => (
            <NavLink
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white',
                  isActive && 'bg-blue-600 text-white shadow-lg shadow-blue-950/30',
                )
              }
              key={item.href}
              onClick={onClose}
              to={item.href}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto p-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">Spring 2027 intake</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              62% application readiness across shortlist, IELTS, documents, and deadlines.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
