import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useLoggedInUser } from '../../data/auth'
import DashboardLoader from '../../components/loader/dashboard-loader'

export default function Protected() {
  const { data, isLoading } = useLoggedInUser()

  const { pathname } = useLocation()

  if (isLoading) {
    return <DashboardLoader />
  }

  if (!data) {
    return (
      <Navigate
        to="/login/d"
        state={{
          from: pathname,
        }}
      />
    )
  }

  return <Outlet />
}
