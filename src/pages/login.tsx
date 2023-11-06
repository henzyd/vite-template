import { Formik } from 'formik'
import FormField from '../components/form-field'
import { LoadingButton } from '@mui/lab'
import useLogin from '../mutations/auth/login'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
  const login = useLogin()
  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        await login.mutateAsync(values).then(() => {
          navigate(state?.from || '/', { replace: true })
        })
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormField name="email" label="Email" type="email" />
          <FormField name="password" label="Password" type="password" />
          {login.isError && (
            <p className="text-sm text-red-500">invalid email/password combination</p>
          )}
          <LoadingButton loading={login.isLoading} type="submit">
            Login
          </LoadingButton>
        </form>
      )}
    </Formik>
  )
}
