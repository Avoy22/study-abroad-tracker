import { Link } from 'react-router'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export function LoginPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-md border-white/10 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Welcome back</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950">Login to your workspace</h1>
        <form className="mt-6 grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <Input id="email" label="Email" placeholder="ayesha@example.com" type="email" />
          <Input id="password" label="Password" placeholder="Enter password" type="password" />
          <Button className="mt-2" type="submit">
            Login
          </Button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-600">
          New here?{' '}
          <Link className="font-semibold text-blue-600 hover:text-blue-500" to="/register">
            Create an account
          </Link>
        </p>
      </Card>
    </main>
  )
}
