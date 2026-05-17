import { ArrowRight, CheckCircle2, Clock, LineChart, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '../components/ui/Button'

const highlights = [
  { label: 'Study hours tracked', value: '420+' },
  { label: 'Deadline visibility', value: '90d' },
  { label: 'IELTS target plan', value: '7.5' },
]

const features = [
  { title: 'Study rhythm', icon: Clock, widthClass: 'w-[88%]' },
  { title: 'Application clarity', icon: ShieldCheck, widthClass: 'w-[74%]' },
  { title: 'Score progress', icon: LineChart, widthClass: 'w-[60%]' },
]

export function LandingPage() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm font-semibold text-blue-100">
            <CheckCircle2 className="h-4 w-4" />
            Spring 2027 planning workspace
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-normal text-white sm:text-6xl">
            Study Abroad Tracker
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            A polished command center for IELTS prep, application deadlines, study logs, and progress analytics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register">
              <Button className="w-full sm:w-auto" size="lg">
                Start planning
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="w-full border-white/15 bg-white/10 text-white hover:bg-white/15 sm:w-auto" size="lg" variant="secondary">
                View demo dashboard
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4" key={item.label}>
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/10 bg-white p-3 shadow-2xl shadow-blue-950/40">
            <div className="rounded-lg bg-slate-950 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-blue-200">Readiness score</p>
                  <p className="text-3xl font-bold text-white">82%</p>
                </div>
                <div className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">On track</div>
              </div>
              <div className="mt-5 grid gap-3">
                {features.map((feature) => (
                  <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3" key={feature.title}>
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500/20 text-blue-100">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-white">{feature.title}</p>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className={`h-2 rounded-full bg-blue-400 ${feature.widthClass}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
