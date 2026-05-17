import { Link } from 'react-router'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'

export function RegisterPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-xl border-white/10 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Create profile</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950">Build your study abroad plan</h1>
        <form className="mt-6 grid gap-4" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input id="name" label="Full name" placeholder="Ayesha Rahman" />
            <Input id="intake" label="Target intake" placeholder="Spring 2027" />
          </div>
          <Input id="register-email" label="Email" placeholder="ayesha@example.com" type="email" />
          <Input id="goal" label="Target country" placeholder="Canada, Australia, UK" />
          <Input id="register-password" label="Password" placeholder="Create password" type="password" />
          <Button className="mt-2" type="submit">
            Create account
          </Button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-600">
          Already registered?{' '}
          <Link className="font-semibold text-blue-600 hover:text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </main>
  )
}
