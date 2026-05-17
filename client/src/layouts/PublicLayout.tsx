import { Outlet, Link } from 'react-router'
import { GraduationCap } from 'lucide-react'

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" to="/">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="font-bold">Study Abroad Tracker</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-semibold">
          <Link className="text-slate-300 transition hover:text-white" to="/login">
            Login
          </Link>
          <Link className="rounded-lg bg-white px-4 py-2 text-slate-950 transition hover:bg-blue-50" to="/register">
            Register
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
