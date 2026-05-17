import { Mail, MapPin, Plane, Settings } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { PageHeader } from '../components/ui/PageHeader'

const preferences = ['Canada', 'Australia', 'Computer Science', 'Scholarships', 'Spring 2027']

export function ProfilePage() {
  return (
    <div>
      <PageHeader
        actions={
          <Button variant="secondary">
            <Settings className="h-4 w-4" />
            Preferences
          </Button>
        }
        description="Student profile, target intake, destination preferences, and readiness summary."
        eyebrow="Account"
        title="Profile"
      />

      <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="grid h-20 w-20 place-items-center rounded-lg bg-blue-600 text-2xl font-bold text-white">
              AR
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-950">Ayesha Rahman</h3>
            <p className="mt-1 text-sm text-slate-500">Computer Science applicant</p>
          </div>

          <div className="mt-6 grid gap-3 text-sm">
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-slate-700">ayesha@example.com</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span className="text-slate-700">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <Plane className="h-4 w-4 text-blue-600" />
              <span className="text-slate-700">Target intake: Spring 2027</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {preferences.map((preference) => (
              <Badge key={preference} tone="blue">
                {preference}
              </Badge>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-slate-950">Profile details</h3>
          <form className="mt-5 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input defaultValue="Ayesha Rahman" id="profile-name" label="Full name" />
              <Input defaultValue="Spring 2027" id="profile-intake" label="Target intake" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input defaultValue="Canada, Australia" id="profile-countries" label="Target countries" />
              <Input defaultValue="Computer Science" id="profile-program" label="Program interest" />
            </div>
            <Input defaultValue="IELTS 7.5, scholarship eligible programs, strong co-op options" id="profile-notes" label="Planning notes" />
            <div className="flex justify-end">
              <Button type="submit">Save mock profile</Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  )
}
