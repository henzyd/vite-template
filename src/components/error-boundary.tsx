import { Button } from '@mui/material'
import { useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError()

  console.error(error)

  return (
    <>
      <h1>An error occurred!</h1>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Reload Page
      </Button>
    </>
  )
}
