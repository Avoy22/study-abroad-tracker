import { useState } from 'react'
import { Outlet } from 'react-router'
import { Sidebar } from '../components/layout/Sidebar'
import { Topbar } from '../components/layout/Topbar'

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="min-w-0 flex-1">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />
          <main className="px-4 py-6 sm:px-6 xl:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
