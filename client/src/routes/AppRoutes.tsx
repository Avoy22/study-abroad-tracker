import { Navigate, Route, Routes } from 'react-router'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import { AnalyticsPage } from '../pages/AnalyticsPage'
import { DashboardPage } from '../pages/DashboardPage'
import { DeadlinesPage } from '../pages/DeadlinesPage'
import { IeltsTrackerPage } from '../pages/IeltsTrackerPage'
import { LandingPage } from '../pages/LandingPage'
import { LoginPage } from '../pages/LoginPage'
import { ProfilePage } from '../pages/ProfilePage'
import { RegisterPage } from '../pages/RegisterPage'
import { StudyLogsPage } from '../pages/StudyLogsPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route element={<DashboardPage />} path="/dashboard" />
        <Route element={<StudyLogsPage />} path="/study-logs" />
        <Route element={<IeltsTrackerPage />} path="/ielts-tracker" />
        <Route element={<DeadlinesPage />} path="/deadlines" />
        <Route element={<AnalyticsPage />} path="/analytics" />
        <Route element={<ProfilePage />} path="/profile" />
      </Route>

      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  )
}
