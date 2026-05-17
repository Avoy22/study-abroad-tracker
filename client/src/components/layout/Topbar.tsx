import { Bell, Menu, Search } from 'lucide-react'
import { Input } from '../ui/Input'

type TopbarProps = {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur xl:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open navigation"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            onClick={onMenuClick}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Today</p>
            <h1 className="text-lg font-bold text-slate-950 sm:text-xl">Application command center</h1>
          </div>
        </div>

        <div className="hidden w-full max-w-sm items-center gap-2 md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input aria-label="Search" className="pl-9" placeholder="Search logs, schools, deadlines" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            type="button"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-950">Ayesha Rahman</p>
              <p className="text-xs text-slate-500">Computer Science applicant</p>
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              AR
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
